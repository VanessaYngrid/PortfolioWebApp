    'use client';

    import { useState } from 'react';

    export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
    const [query, setQuery] = useState('');

    // Llamar a la función onSearch cuando cambia el input
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
        onSearch(event.target.value); // Llamamos a onSearch con el valor del input
    };

    return (
        <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
            </svg>
        </div>
        <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-md text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-[#4A1942] focus:border-[#6e2d63]"
            placeholder="Explore my skills..."
            value={query}
            onChange={handleChange}
            required
        />
        </div>
    );
    }

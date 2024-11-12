'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Weather from '../weather/page';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const handleMenuItemClick = (id: string) => {
        router.push(`/#${id}`);
        setIsOpen(false); // Close the menu after navigation
    };

    return (
        <nav className="bg-[#4A1942] lg:py-4 md:px-10 lg:px-32 py-4 px-10">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <a href="/">
                    <div className="text-white text-lg">
                        Vanessa Vargas
                    </div>
                </a>
                <button className="text-white block lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>

                {/* Menu container */}
                <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? 'flex' : 'hidden'}`}>
                    {/* Flex container dividido en dos partes */}
                    <div className="flex justify-between w-full">
                        {/* Enlaces a la izquierda */}
                        <ul className="flex flex-col md:flex-row lg:space-x-4 mt-4 lg:mt-0">
                            <li>
                                <a onClick={() => handleMenuItemClick('home')} className="text-white block py-2 px-4 cursor-pointer">Home</a>
                            </li>
                            <li>
                                <a onClick={() => handleMenuItemClick('about')} className="text-white block py-2 px-4 cursor-pointer">About</a>
                            </li>
                            <li>
                                <a onClick={() => handleMenuItemClick('education')} className="text-white block py-2 px-4 cursor-pointer">Education</a>
                            </li>
                            <li>
                                <a onClick={() => handleMenuItemClick('skillsmain')} className="text-white block py-2 px-4 cursor-pointer">Skills</a>
                            </li>
                            <li>
                                <a onClick={() => handleMenuItemClick('projects')} className="text-white block py-2 px-4 cursor-pointer">Projects</a>
                            </li>
                            <li>
                                <a onClick={() => handleMenuItemClick('experience')} className="text-white block py-2 px-4 cursor-pointer">Experience</a>
                            </li>
                            <li>
                                <a onClick={() => handleMenuItemClick('contact')} className="text-white block py-2 px-4 cursor-pointer">Contact</a>
                            </li>
                        </ul>
                        {/* Weather a la derecha */}
                        <div className="mt-4 lg:mt-0">
                            <Weather />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

'use client';

import { useState, useEffect } from 'react';

// Define the TypeScript type for soft skills
type SoftSkills = {
    softSkills: string[],
};

export default function SoftSkillsComponent({ searchQuery }: { searchQuery: string }) {
    const [softSkills, setSoftSkills] = useState<string[]>([]);
    const [myComponent, setMyComponent] = useState(<></>);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/softSkills`);
                if (response.ok) {
                    const data: SoftSkills = await response.json();
                    setSoftSkills(data.softSkills);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (softSkills.length > 0) {
            const filteredSkills = softSkills.filter(skill =>
                skill.toLowerCase().includes(searchQuery)
            );

            // Only render the title and skills if there are filtered results
            const component = (
                <div className="max-w-full mx-auto px-4 py-8 text-center">
                    {filteredSkills.length > 0 ? (
                        <>
                            <h1 className="text-3xl font-bold mb-8 text-[#4A1942]">SOFT SKILLS</h1>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                {filteredSkills.map((skill, index) => (
                                    <div className="bg-[#F0F0F0] rounded overflow-hidden shadow-lg" key={skill + index}>
                                        <div className='px-4 py-4 lg:py-6 w-full flex items-center justify-center'>
                                            <h2 className='text-[#4A1942] text-md font-normal'>{skill}</h2>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        // Optionally, you can render a message if no skills match the search query
                        <h2 className="text-md text-[#4A1942]"></h2>
                    )}
                </div>
            );

            setMyComponent(component);
        }
    }, [softSkills, searchQuery]);

    return (
        <div className="bg-[#F9F9F9] px-8 md:px-10 lg:px-16 pb-20 overflow-x-hidden">
            {myComponent}
        </div>
    );
}

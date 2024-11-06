'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Define the TypeScript type for language skills
type LanguageSkills = {
    language_id: string;
    language: string;
    level: string;
};

// Function to transform skill names for image URLs
const transformSkillName = (skill: string) => {
    return skill
        .replace(/ /g, '_')
        .replace(/#/g, '%23')
        .toLowerCase();
};

// Define props for the component
interface LanguagesSkillsProps {
    searchQuery: string;
}

export default function LanguagesSkills({ searchQuery }: LanguagesSkillsProps) {
    const [languageSkills, setLanguageSkills] = useState<LanguageSkills[]>([]);

    // Fetch language skills when the component mounts
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/languageSkills`);
                if (response.ok) {
                    const data: LanguageSkills[] = await response.json();
                    setLanguageSkills(data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    // Filter the language skills based on the search query
    const filteredSkills = languageSkills.filter((skill) =>
        skill.language.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-[#F9F9F9] px-8 md:px-10 lg:px-16 overflow-x-hidden">
            <div className="max-w-full mx-auto px-4 py-8 text-center">
                {filteredSkills.length > 0 ? (
                    <>
                        <h1 className="text-3xl font-bold mb-8 text-[#4A1942]">LANGUAGE SKILLS</h1>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
                            {filteredSkills.map((skill) => (
                                <div className="bg-[#F0F0F0] rounded overflow-hidden shadow-lg pb-4" key={skill.language_id}>
                                    <div className="text-center pt-4 pb-2 w-full h-16 flex items-center justify-center">
                                        <Image
                                            src={`/images/languages/${transformSkillName(skill.language)}.png`}
                                            alt={`${skill.language} logo`}
                                            width={50}
                                            height={50}
                                            layout="intrinsic"
                                        />
                                    </div>
                                    <div className="px-4 w-full flex items-center justify-center">
                                        <h2 className="text-[#4A1942] text-md font-normal">{skill.language}</h2>
                                    </div>
                                    <div className="px-4 w-full flex items-center justify-center">
                                        <p className="text-[#6B4C7C] text-sm">{skill.level}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <h2 className="text-md text-[#4A1942]"> </h2>
                )}
            </div>
        </div>
    );
}

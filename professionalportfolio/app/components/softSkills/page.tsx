'use client';

import { useState, useEffect } from 'react';

type SoftSkills = {
    softSkills: string[];
};

interface SoftSkillsComponentProps {
    searchQuery: string;
}

export default function SoftSkillsComponent({ searchQuery }: SoftSkillsComponentProps) {
    const [softSkills, setSoftSkills] = useState<SoftSkills | null>(null);
    const [filteredSkills, setFilteredSkills] = useState<string[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/softSkills`, { cache: "no-cache" });
                if (response.ok) {
                    const data: SoftSkills = await response.json();
                    setSoftSkills(data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    // Filter skills based on searchQuery
    useEffect(() => {
        if (softSkills) {
            const filtered = softSkills.softSkills.filter(skill =>
                skill.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredSkills(filtered);
        }
    }, [softSkills, searchQuery]);

    const renderSkillCards = (skills: string[]) => {
        return (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {skills.map((skill, index) => (
                    <div className="bg-[#F0F0F0] rounded overflow-hidden shadow-lg" key={skill + index}>
                        <div className="px-4 py-4 lg:py-6 w-full flex items-center justify-center">
                            <h2 className="text-[#4A1942] text-md font-normal">{skill}</h2>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="bg-[#F9F9F9] px-6 md:px-10 lg:px-16 pb-20 overflow-x-hidden">
            <div className="max-w-full mx-auto px-4 py-8 text-center">
                <h1 className="text-3xl font-bold mb-8 text-[#4A1942]">SOFT SKILLS</h1>
                {renderSkillCards(filteredSkills)}
            </div>
        </div>
    );
}

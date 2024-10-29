'use client';

import { useState, useEffect } from 'react';

// Define the TypeScript type for soft skills
type SoftSkills = {
    softSkills: string[],
};

export default function SoftSkillsComponent() {
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
            const component = (
                <div className="max-w-full mx-auto px-4 py-8 text-center">
                    <h1 className="text-4xl font-bold mb-8 text-[#4A1942]">Soft Skills</h1>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {softSkills.map((skill, index) => (
                            <div className="bg-[#3d1538] rounded overflow-hidden shadow-lg" key={skill + index}>
                                <div className='px-4 py-4 lg:py-6 w-full flex items-center justify-center'>
                                    <h2 className='text-white text-md font-normal'>{skill}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );

            setMyComponent(component);
        }
    }, [softSkills]);

    return (
        <div className="bg-[#F9F9F9] px-8 md:px-16 pb-14 overflow-x-hidden">
            {myComponent}
        </div>
    );
}

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Define the TypeScript type for agile skills
type AgileSkills = {
    agile: string[],
    certification: string[],
};

const transformSkillName = (skill: string) => {
    return skill
        .replace(/ /g, '_')
        .replace(/#/g, '%23')
        .toLowerCase();
};

export default function AgileSkillsComponent() {
    const [agileSkills, setAgileSkills] = useState<AgileSkills | null>(null);
    const [myComponent, setMyComponent] = useState(<></>);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/agileSkills`);
                if (response.ok) {
                    const data: AgileSkills = await response.json();
                    setAgileSkills(data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (agileSkills) {
            const component = (
                <div className="max-w-full mx-auto px-4 py-8 text-center">
                    <h1 className="text-3xl font-bold mb-8 text-black">Agile Skills</h1>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {agileSkills.agile.map((skill, index) => (
                            <div className="bg-gray-200 rounded overflow-hidden shadow-lg" key={skill + index}>
                                <div className='text-center pt-4 pb-2 w-full h-16 flex items-center justify-center'>
                                    <Image
                                        src={`/images/agile/${transformSkillName(skill)}.png`} // Ensure images are stored correctly
                                        alt={`${skill} logo`}
                                        width={50}
                                        height={50}
                                        layout='intrinsic'
                                    />
                                </div>
                                <div className='px-4 pb-4 w-full flex items-center justify-center'>
                                    <h2 className='text-black text-md font-normal'>{skill}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h2 className="text-xl font-bold my-8 text-black">Certifications</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                        {agileSkills.certification.map((cert, index) => (
                            <div className="bg-gray-200 rounded overflow-hidden shadow-lg flex" key={cert + index}>
                                <div className='flex-shrink-0 w-1/2 h-full relative'>
                                    <Image
                                        src={`/images/certification/${transformSkillName(cert)}.png`}
                                        alt={`${cert} logo`}
                                        layout='fill'
                                        objectFit='cover' // Ensures the image covers the entire area
                                        className='rounded-l'
                                    />
                                </div>
                                <div className='flex flex-col justify-center w-1/2 px-4 py-2'>
                                    <h2 className='text-black text-sm font-semibold'>{cert}</h2>
                                    <a 
                                        href={`/pdfs/${transformSkillName(cert)}.pdf`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='text-blue-500 underline text-md mt-1'
                                    >
                                        View Certificate
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );

            setMyComponent(component);
        }
    }, [agileSkills]);

    return (
        <div className="bg-white px-8 md:px-16 overflow-x-hidden">
            {myComponent}
        </div>
    );
}
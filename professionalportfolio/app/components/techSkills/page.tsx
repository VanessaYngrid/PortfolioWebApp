'use client'

import { useState, useEffect } from "react";
import Image from 'next/image';

// Type for the technology skills data
type TechnologySkills = {
    programming: {
        frontend: { name: string, knowledge: number }[],
        backend: { name: string, knowledge: number }[],
        database: { name: string, knowledge: number }[],
    },
    tools: string[],
};

// Function to transform skill names for image URLs
const transformSkillName = (skill: string) => {
    return skill
        .replace(/ /g, '_')
        .replace(/#/g, '%23')
        .toLowerCase();
};

const ProgressBar = ({ knowledge }: { knowledge: number }) => {
    return (
        <div className="flex items-center px-4">
            <div className="h-2 bg-gray-300 rounded w-full">
                <div
                    className="h-full bg-gray-400 rounded"
                    style={{ width: `${knowledge}%` }}
                ></div>
            </div>
            <span className="ml-2 text-black">{knowledge}%</span>
        </div>
    );
};

export default function TechSkills() {
    
    const [techSkills, setTechSkills] = useState<TechnologySkills | null>(null);
    const [myComponent, setMyComponent] = useState(<></>);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/techSkills`);
                if (response.ok) {
                    const data: TechnologySkills = await response.json();
                    setTechSkills(data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (techSkills) {
            const renderSkills = (skills: { name: string, knowledge: number }[]) => {
                return skills.map((skill, index) => (
                    <div className="mb-6" key={skill.name + index}>
                        <h3 className="text-lg font-normal text-black">{skill.name}</h3>
                        <ProgressBar knowledge={skill.knowledge} />
                    </div>
                ));
            };

            const component = (
                <div className="max-w-full mx-auto px-4 py-8 text-center">
                    <h1 className="text-3xl font-bold mb-8 text-black">Technology Skills</h1>
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="w-full md:w-1/2 pr-0 md:pr-4">
                            <h2 className="text-xl font-bold mb-4 text-black">Front End</h2>
                            {renderSkills(techSkills.programming.frontend)}
                        </div>
                        <div className="w-full md:w-1/2 pl-0 md:pl-4">
                            <h2 className="text-xl font-bold mb-4 text-black">Back End</h2>
                            {renderSkills(techSkills.programming.backend)}
                            <h2 className="text-xl font-bold mt-4 md:mt-14 mb-4 text-black">Database</h2>
                            {renderSkills(techSkills.programming.database)}
                        </div>
                    </div>
                    <h2 className="text-xl font-bold my-8 text-black">Tools</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {techSkills.tools.map(tool => (
                            <div className="bg-gray-200 rounded overflow-hidden shadow-lg" key={tool}>
                                <div className='text-center pt-6 pb-2 w-full h-16 flex items-center justify-center'>
                                    <Image
                                        src={`/images/tools/${transformSkillName(tool)}.png`}
                                        alt={`${tool} logo`}
                                        width={50}
                                        height={50}
                                        layout='intrinsic'
                                    />
                                </div>
                                <div className='px-4 w-full h-10 flex items-center justify-center'>
                                    <h2 className='text-black text-md font-normal'>{tool}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );

            setMyComponent(component);
        }
    }, [techSkills]);

    return (
        <div className="bg-white px-16 overflow-x-hidden">
            {myComponent}
        </div>
    );
}


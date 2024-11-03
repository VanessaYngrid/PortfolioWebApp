'use client';

import { useState, useEffect } from "react";
import Image from 'next/image';

type TechnologySkills = {
    programming: {
        frontend: { name: string, knowledge: number }[],
        backend: { name: string, knowledge: number }[],
        database: { name: string, knowledge: number }[],
    },
    tools: string[],
};

const transformSkillName = (skill: string) => { 
    return skill.replace(/ /g, '_').replace(/#/g, '%23').toLowerCase();
};

const ProgressBar = ({ knowledge }: { knowledge: number }) => {
    return (
        <div className="flex items-center px-0">
            <div className="h-2 bg-white rounded w-full shadow-md">
                <div className="h-full bg-[#6B4C7C] rounded" style={{ width: `${knowledge}%` }}></div>
            </div>
            <span className="ml-2 text-[#4A1942] font-semibold">{knowledge}%</span>
        </div>
    );
};

export default function TechSkills({ searchQuery }: { searchQuery: string }) {
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
            const renderSkills = (skills: { name: string, knowledge: number }[], title: string) => {
                const filteredSkills = skills.filter(skill => skill.name.toLowerCase().includes(searchQuery));

                if (filteredSkills.length > 0) {
                    return (
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-[#893168]">{title}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {filteredSkills.map((skill, index) => (
                                    <div className="mb-6" key={skill.name + index}>
                                        <h3 className="text-md font-normal text-[#2B2B2B] text-left">{skill.name}</h3>
                                        <ProgressBar knowledge={skill.knowledge} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                }
                return null; // No skills found, return nothing
            };

            const filteredTools = techSkills.tools.filter(tool => tool.toLowerCase().includes(searchQuery));
            const toolsComponent = (
                <div className="mb-8">
                    {filteredTools.length > 0 && (
                        <>
                            <div className="text-2xl font-bold my-8 text-[#893168]">Tools</div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                {filteredTools.map(tool => (
                                    <div className="bg-[#F0F0F0] rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105" key={tool}>
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
                                            <h2 className='text-[#4A1942] text-md font-normal'>{tool}</h2>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            );

            // Renderizar el componente
            const component = (
                <div className="max-w-full mx-auto px-4 py-8 text-center">
                    {/* Solo mostrar el título "TECHNOLOGY SKILLS" si hay habilidades o herramientas filtradas */}
                    {(techSkills.programming.frontend.some(skill => skill.name.toLowerCase().includes(searchQuery)) || 
                      techSkills.programming.backend.some(skill => skill.name.toLowerCase().includes(searchQuery)) || 
                      techSkills.programming.database.some(skill => skill.name.toLowerCase().includes(searchQuery)) || 
                      filteredTools.length > 0) && (
                        <h1 className="text-3xl font-bold mb-8 text-[#4A1942]">TECHNOLOGY SKILLS</h1>
                    )}
                    {renderSkills(techSkills.programming.frontend, "Front-End")}
                    {renderSkills(techSkills.programming.backend, "Back-End")}
                    {renderSkills(techSkills.programming.database, "Database")}
                    {toolsComponent}
                </div>
            );

            setMyComponent(component);
        }
    }, [techSkills, searchQuery]);

    return (
        <div className="bg-[#F9F9F9] px-8 md:px-10 lg:px-16 overflow-x-hidden">
            {myComponent}
        </div>
    );
}

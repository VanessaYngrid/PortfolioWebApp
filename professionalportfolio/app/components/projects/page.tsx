'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../navbar/page';
import Contact from '../contact/page';
import Footer from '../footer/page';

export default function Projects() {
    type Projects = {
        project_id: string;
        title: string;
        duration: string;
        category: string;
        type: string;
        description: {
            description1: string;
            description2: string;
            description3?: string;
            description4?: string;
        };
        technologies: string[];
        image: string[]; // Array of images for each project
        demo: string;
        github?: string;
    };

    const [projects, setProjects] = useState<Projects[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`);
                if (response.ok) {
                    const data: Projects[] = await response.json();
                    setProjects(data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="overflow-x-hidden">
            <Navbar/>
            <div className="relative bg-cover bg-center h-60" style={{ backgroundImage: 'url(/images/projectsBanner.jpg)' }}>
                <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold bg-black  bg-opacity-70 p-4"> {/*[#4A1942]*/}
                    SHOWCASE OF MY WORK
                </h1>
            </div>
            <div className="bg-[#F9F9F9] px-14 md:px-16 pt-10 pb-14">
                <div className="flex flex-col space-y-8">
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={project.project_id} 
                            project={project} 
                            gridColumns={index === 1 ? 'md:grid-cols-4' : 'md:grid-cols-3'} 
                        />
                    ))}
                </div>
            </div>
            <Contact/>
            <Footer/>
        </div>
    );

    // ProjectCard Component
    function ProjectCard({ project, gridColumns }: { project: Projects; gridColumns: string }) {
        return (
            <div className="flex flex-col md:flex-row border rounded-lg shadow-lg overflow-hidden">
                <div className="w-full md:w-1/2 p-4">
                    <div className={`grid grid-cols-2 ${gridColumns} gap-4`}>
                        {project.image.slice(1).map((imgSrc, index) => (
                            <div key={index} className="relative group flex justify-center items-center">
                                <Image
                                    src={imgSrc}
                                    alt={`Project image ${index + 2}`}
                                    className="h-auto max-w-full rounded-lg object-cover"
                                    width={300}
                                    height={200}
                                    layout="responsive"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
                    <h2 className="text-[#893168] text-xl font-semibold pb-2 flex justify-start items-center">{project.title}
                    <span className="flex space-x-2 ml-4">
                            {project.demo && (
                                <a 
                                    href={project.demo} 
                                    className="text-black text-sm bg-gray-200 text-normal rounded-full px-2 py-1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Demo
                                </a>
                            )}
                            {project.github && (
                                <a 
                                    href={project.github} 
                                    className="text-black text-sm bg-gray-200 text-normal rounded-full px-2 py-1"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                            )}
                        </span>
                    </h2>
                    <p className="text-gray-600">{project.category} ({project.type})</p>
                    <p className="text-gray-600 mb-4">Duration: {project.duration}</p>
                    <p className="mt-2">Description:</p>
                    <ul className="list-disc list-inside mb-4">
                        <li>{project.description.description1}</li>
                        <li>{project.description.description2}</li>
                        {project.description.description3 && <li>{project.description.description3}</li>}
                        {project.description.description4 && <li>{project.description.description4}</li>}
                    </ul>
                    <div className="flex flex-wrap pt-4">
                        {project.technologies.map((tech) => (
                            <span key={tech} className="inline-block bg-[#4A1942] bg-opacity-70 rounded-md px-3 py-1 text-sm font-normal text-white mr-2 mb-2">
                                #{tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

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
        description: {
            description1: string;
            description2: string;
            description3?: string;
            description4?: string;
        };
        technologies: string[];
        image: string[]; // Array of images for each project
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
            <div className="bg-[#F9F9F9] px-14 md:px-16 pt-10 pb-14">
                <h1 className="text-[#4A1942] text-3xl font-bold text-center mb-8">MY PROJECTS</h1>
                <div className="flex flex-col space-y-8">
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={project.project_id} 
                            project={project} 
                            gridColumns={index === 2 ? 'md:grid-cols-4' : 'md:grid-cols-3'} 
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
                            <div key={index} className="relative group">
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
                <div className="w-full md:w-1/2 p-4 flex-1">
                    <h2 className="text-[#893168] text-xl font-semibold pb-2">{project.title}</h2>
                    <p className="text-gray-600">{project.category}</p>
                    <p className="text-gray-600 pb-4">Duration: {project.duration}</p>
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

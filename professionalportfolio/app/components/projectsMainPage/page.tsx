'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type Project = {
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
    image: string;
};

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [myComponent, setMyComponent] = useState<JSX.Element | null>(null);

    useEffect(() => {
        async function fetchProjects() {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`);
            if (response.ok) {
                const data = await response.json();
                setProjects(data);
            }
        }
        fetchProjects();
    }, []);

    useEffect(() => {
        if (projects.length > 0) {
            const { title, duration, category, technologies, image } = projects[currentIndex];

            const component = (
                <div className="flex flex-col md:flex-row w-full bg-[#3d1538] rounded-lg overflow-hidden h-[400px] md:h-[350px] shadow-lg">
                    <div className="relative w-full md:w-1/2 h-[200px] md:h-full">
                        <Image
                            src={image}
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                            className="transition duration-700 ease-in-out"
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-center text-start p-4 md:p-6 h-[200px] md:h-full">
                        <div>
                            <h2 className="text-[#FFB3C1] text-xl font-semibold pb-4 md:pl-6">{title}</h2>
                            <p className="text-gray-200 md:pl-6">{category}</p>
                            <p className="text-gray-200 pb-10 md:pl-6"><strong>Duration:</strong> {duration}</p>
                        </div>
                        <div className="flex flex-wrap md:pl-6">
                            {technologies.map((tech) => (
                                <span key={tech} className="inline-block bg-[#FFB3C1] bg-opacity-70 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                    #{tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            );

            setMyComponent(component);
        }
    }, [projects, currentIndex]);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    if (projects.length === 0) return <div className="text-center">Loading...</div>;

    return (
        <div className="relative bg-[#46183f] text-center pt-10 pb-14 px-36">
            <h1 className="text-[#EAEAEA] text-3xl font-bold text-center mb-10">MY PROJECTS</h1>
            <div className="max-w-[1200px] mx-auto flex items-center flex-col md:flex-row">
                <button
                    type="button"
                    className="absolute left-24 top-1/2 transform -translate-y-1/2 z-30 h-10 w-10 bg-white bg-opacity-60 rounded-full shadow-lg hover:bg-opacity-80 transition duration-200 flex items-center justify-center"
                    onClick={prevProject}
                    aria-label="Previous Project"
                >
                    <svg className="w-4 h-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                    </svg>
                </button>

                {myComponent}

                <button
                    type="button"
                    className="absolute right-24 top-1/2 transform -translate-y-1/2 z-30 h-10 w-10 bg-white bg-opacity-60 rounded-full shadow-lg hover:bg-opacity-80 transition duration-200 flex items-center justify-center"
                    onClick={nextProject}
                    aria-label="Next Project"
                >
                    <svg className="w-4 h-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                </button>
            </div>

            <div className="mt-12">
                <a 
                    className="inline-block bg-[#6B4C7C] text-white py-3 px-8 rounded-full cursor-pointer hover:bg-[#4C3A61] transition"
                >
                    See more details
                </a>
            </div>
        </div>
    );
}

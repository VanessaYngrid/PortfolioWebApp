'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

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
    image: string[];
    demo: string;
    github?: string;
};

export default function Projects() {
    const [projects, setProjects] = useState<Projects[]>([]);
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
                <div className="flex flex-col sm:flex-row w-full">
                    <div className="relative w-full md:w-1/2">
                        <div className="relative border-gray-800 bg-gray-800 border-[8px] mx-auto max-w-[600px]">
                            <Image
                                src="/images/personal_portfolio.png" 
                                alt="Desktop mockup"
                                layout="responsive"
                                width={680}
                                height={400}
                                className="rounded-t-xl"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Image
                                    src={image[0]}
                                    alt={title}
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="top"
                                    className="rounded-b-xl"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-center text-start p-4 md:py-6 md:px-20">
                        <h2 className="text-[#893168] text-2xl md:text-xl font-semibold pb-4">{title}</h2>
                        <p className="text-gray-600">{category}</p>
                        <p className="text-gray-600 pb-10"><strong>Duration:</strong> {duration}</p>
                        <div className="flex flex-wrap">
                            {technologies.map((tech) => (
                                <span key={tech} className="inline-block bg-[#4A1942] bg-opacity-70 rounded-md px-2 py-1 text-sm font-normal text-white mr-2 mb-2">
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
        <div className="bg-[#F0F0F0] relative text-center pt-10 pb-14 px-4 sm:px-10 md:px-36">
            <h1 className="text-[#4A1942] text-3xl md:text-4xl font-bold text-center mb-10">MY PROJECTS</h1>
            <div className="max-w-[1200px] mx-auto flex items-center flex-col md:flex-row relative">
                <button
                    type="button"
                    className="absolute -left-20 top-1/2 transform -translate-y-1/2 z-30 h-10 w-10 bg-white bg-opacity-60 rounded-full shadow-lg hover:bg-opacity-80 transition duration-200 hidden md:flex items-center justify-center"
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
                    className="absolute -right-20 top-1/2 transform -translate-y-1/2 z-30 h-10 w-10 bg-white bg-opacity-60 rounded-full shadow-lg hover:bg-opacity-80 transition duration-200 hidden md:flex items-center justify-center"
                    onClick={nextProject}
                    aria-label="Next Project"
                >
                    <svg className="w-4 h-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                </button>

                {/* Botones de navegación para móviles */}
                <div className="flex justify-between mt-4 md:hidden space-x-10"> {/* Espacio entre los botones */}
                    <button
                        type="button"
                        className="h-10 w-10 bg-white bg-opacity-60 rounded-full shadow-lg hover:bg-opacity-80 transition duration-200 flex items-center justify-center"
                        onClick={prevProject}
                        aria-label="Previous Project"
                    >
                        <svg className="w-4 h-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                        </svg>
                    </button>

                    <button
                        type="button"
                        className="h-10 w-10 bg-white bg-opacity-60 rounded-full shadow-lg hover:bg-opacity-80 transition duration-200 flex items-center justify-center"
                        onClick={nextProject}
                        aria-label="Next Project"
                    >
                        <svg className="w-4 h-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                    </button>
                </div>
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

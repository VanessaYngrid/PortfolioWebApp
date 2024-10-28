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
                <div className="flex flex-col md:flex-row w-full">
                    <div className="relative w-full md:w-1/2">
                        <div className="relative border-gray-800 bg-gray-800 border-[8px] mx-auto max-w-[600px]">
                            <Image
                                src="https://flowbite.s3.amazonaws.com/docs/device-mockups/desktop.png" // Replace with your desktop mockup image URL
                                alt="Desktop mockup"
                                layout="responsive"
                                width={680}
                                height={400}
                                className="rounded-t-xl"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Image
                                    src={image}
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
                        <h2 className="text-[#893168] text-xl font-semibold pb-4">{title}</h2>
                        <p className="text-[#4A1942]">{category}</p>
                        <p className="text-[#4A1942] pb-10"><strong>Duration:</strong> {duration}</p>
                        <div className="flex flex-wrap">
                            {technologies.map((tech) => (
                                <span key={tech} className="inline-block bg-[#4A1942] bg-opacity-70 rounded-md px-3 py-1 text-sm font-normal text-white mr-2 mb-2">
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
        <div className="bg-[#F9F9F9] relative text-center pt-10 pb-14 px-36"> {/*bg-[#F9F9F9] , E1BEE7 , F0E6F6, D7C9D7, E6E6E6*/}
            <h1 className="text-[#4A1942] text-3xl font-bold text-center mb-10">MY PROJECTS</h1>
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

'use client';

import { useEffect, useState } from "react";

// Define type
type JobExperience = {
    company: string;
    department: string;
    position: string;
    dateRange: string;
    responsibilities: {
        responsibilities1: string;
        responsibilities2: string;
        responsibilities3?: string;
        responsibilities4?: string;
    };
};

export default function WorkExperience() {
    const [experienceInfo, setExperienceInfo] = useState<JobExperience[]>([]);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);

    // Fetching the experience data from the API when the component mounts
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/experience`, { cache: "no-cache" })
            .then((res) => res.json())
            .then((data) => {
                setDataIsLoaded(true);
                setExperienceInfo(data);
            });
    }, []);

    function renderTimeline() {
        const recentExperiences = experienceInfo.slice(0, 3); // Three most recent experiences
        const olderExperiences = experienceInfo.slice(3); // Older experiences

        return (
            <div className="flex justify-between px-28 pt-10">
                <div className="w-full sm:w-1/2 px-10">
                    <h2 className="text-2xl font-bold text-[#4A1942] mb-4">Recent Experience</h2>
                    {recentExperiences.map((exp, index) => (
                        <ol key={index} className="relative border-s border-gray-200 mb-10">
                            <li className="ms-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-[#6B4C7C] rounded-full -start-3 ring-8 ring-white">
                                    <svg
                                        className="w-2.5 h-2.5 text-[#FFB3C1]"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </span>
                                <h3 className="flex items-center mb-1 text-lg font-semibold text-[#4A1942]">
                                    {exp.dateRange}
                                </h3>
                                <p className="block mb-4 text-lg font-semibold leading-none text-[#893168]">
                                    {exp.position}
                                </p>
                                <p className="mb-1 text-base font-normal text-[#4A1942]">
                                    {exp.company}
                                </p>
                                <p className="mb-6 text-base font-normal text-[#4A1942]">
                                    {exp.department}
                                </p>
                                <ul className="list-disc list-inside">
                                    {Object.values(exp.responsibilities).map((resp, idx) => (
                                        resp && <li key={idx} className="mb-1 text-base font-normal text-gray-500">{resp}</li>
                                    ))}
                                </ul>
                            </li>
                        </ol>
                    ))}
                </div>

                <div className="w-full sm:w-1/2 px-12">
                    <h2 className="text-2xl font-bold text-[#4A1942] mb-4">Previous Experience</h2>
                    {olderExperiences.map((exp, index) => (
                        <ol key={index} className="relative border-s border-gray-200 mb-10">
                            <li className="ms-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-[#6B4C7C] rounded-full -start-3 ring-8 ring-white">
                                    <svg
                                        className="w-2.5 h-2.5 text-[#FFB3C1]"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </span>
                                <h3 className="flex items-center mb-1 text-lg font-semibold text-[#4A1942]">
                                    {exp.dateRange}
                                </h3>
                                <p className="block mb-4 text-lg font-semibold leading-none text-[#893168]">
                                    {exp.position}
                                </p>
                                <p className="mb-1 text-base font-normal text-[#4A1942]">
                                    {exp.company}
                                </p>
                                <p className="mb-6 text-base font-normal text-[#4A1942]">
                                    {exp.department}
                                </p>
                                <ul className="list-disc list-inside leading-relaxed">
                                    {Object.values(exp.responsibilities).map((resp, idx) => (
                                        resp && <li key={idx} className="mb-1 text-base font-normal text-gray-500">{resp}</li>
                                    ))}
                                </ul>
                            </li>
                        </ol>
                    ))}
                </div>
            </div>
        );
    }

    // Rendering the component
    return (
        <div className="overflow-x-hidden bg-[#F9F9F9] text-start pt-10">
            <h1 className="text-[#4A1942] text-4xl font-bold text-center mb-6">WORK EXPERIENCE</h1>
            <div className="container mx-auto">
                {dataIsLoaded && renderTimeline()}
            </div>
        </div>
    );
}

'use client';

import { useEffect, useState } from "react";
import Image from 'next/image'; // Importa el componente Image

// Define type
type EducationInfo = {
    education_id: string,
    program: string,
    university: string,
    period: string,
    place: string,
};

export default function Education() {
    // Hold the education information array
    const [eduInfo, setEduInfo] = useState<EducationInfo[]>([]);
    // To indicate if the data has been loaded
    const [dataIsLoaded, setDataIsLoaded] = useState(false);

    // It will render the education timeline
    function renderTimeline() {
        return (
            <div className="education-horizontal-timeline relative px-24">
                <div className="flex justify-center items-center">
                    {eduInfo.length > 0 && eduInfo.map((edu, index) => (
                        <div key={edu.education_id} className="single-horizontal-timeline text-start flex-1 mx-4">
                            <div className="experience-time mb-4 flex items-center">
                                <h2 className="text-lg font-semibold text-black">{edu.period}</h2>
                            </div>
                            <div className="timeline-horizontal-border flex items-start mb-4">
                                <i className="fa fa-circle text-black" aria-hidden="true"></i>
                                {index < eduInfo.length && (
                                    <span className="single-timeline-horizontal flex-grow border-t border-black"></span>
                                )}
                            </div>
                            <div className="timeline">
                                <div className="timeline-content text-start mb-2">
                                    <div className="flex items-center">
                                        <Image 
                                            src="/icons/program.png" 
                                            alt="program icon" 
                                            width={16} 
                                            height={16} 
                                            className="mr-4" 
                                        />
                                        <h3 className="text-black">{edu.program}</h3>
                                    </div>
                                    <div className="flex items-center">
                                        <Image 
                                            src="/icons/university.png" 
                                            alt="university icon" 
                                            width={16} 
                                            height={16} 
                                            className="mr-4" 
                                        />
                                        <h4 className="title text-black font-normal">{edu.university}</h4>
                                    </div>
                                    <div className="flex items-center">
                                        <Image 
                                            src="/icons/place.png" 
                                            alt="place icon" 
                                            width={16} 
                                            height={16} 
                                            className="mr-4" 
                                        />
                                        <h5 className="text-black">{edu.place}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // Fetching the education data from the API when the component mounts
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/education`, { cache: "no-cache" })
            .then((res) => res.json())
            .then((data) => {
                setDataIsLoaded(true);
                setEduInfo(data);
            });
    }, []);

    // Rendering the component
    return (
        <>
            <div className="overflow-x-hidden bg-white text-center pt-10">
                <h1 className="text-black text-3xl font-bold">EDUCATION</h1> 
                <div className="container mx-auto py-16 px-4 sm:px-8">
                    {dataIsLoaded && renderTimeline()}
                </div>
            </div>
        </>
    );
}


'use client';

import { useEffect, useState } from "react";
import Image from 'next/image';

// Define type
type EducationInfo = {
    education_id: string,
    program: string,
    university: string,
    period: string,
    place: string,
};

export default function Education() {
    const [eduInfo, setEduInfo] = useState<EducationInfo[]>([]);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);

    function renderTimeline() {
        return (
            <div className="relative pt-4 pb-10 px-6 md:px-12 lg:px-40">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {eduInfo.length > 0 && eduInfo.map((edu) => (
                        <div key={edu.education_id} className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl border-l-4 border-[#FFB3C1]">
                            <div className="mb-4">
                                <h2 className="text-base font-bold text-[#4A1942]">{edu.period}</h2>
                            </div>
                            <div className="flex items-center mb-2">
                                <Image 
                                    src="/icons/program.png" 
                                    alt="program icon" 
                                    width={24} 
                                    height={24} 
                                    className="mr-2" 
                                />
                                <h3 className="text-md font-bold text-[#893168]">{edu.program}</h3>
                            </div>
                            <div className="flex items-center mb-2">
                                <Image 
                                    src="/icons/university.png" 
                                    alt="university icon" 
                                    width={24} 
                                    height={24} 
                                    className="mr-2" 
                                />
                                <h4 className="text-sm text-[#6B6B8A]">{edu.university}</h4>
                            </div>
                            <div className="flex items-center mb-4">
                                <Image 
                                    src="/icons/place.png" 
                                    alt="place icon" 
                                    width={24} 
                                    height={24} 
                                    className="mr-2" 
                                />
                                <h5 className="text-md text-[#6B6B8A]">{edu.place}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/education`, { cache: "no-cache" })
            .then((res) => res.json())
            .then((data) => {
                setDataIsLoaded(true);
                setEduInfo(data);
            });
    }, []);

    return (
        <div className="overflow-x-hidden bg-[#F9F9F9] text-center pt-6">
            <h1 className="text-[#4A1942] text-3xl font-bold mb-6">EDUCATION</h1> 
            <div className="container mx-auto py-6">
                {dataIsLoaded ? renderTimeline() : <p className="text-gray-500">Loading...</p>}
            </div>
        </div>
    );
}

    


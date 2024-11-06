    // app/components/agileSkills/page.tsx
    'use client';

    import { useState, useEffect } from 'react';
    import Image from 'next/image';
    import { useSearchParams } from 'next/navigation'; // for query parameters

    type AgileSkills = {
    agile: string[];
    certification: string[];
    };

    const transformSkillName = (skill: string) => {
    return skill.replace(/ /g, '_').replace(/#/g, '%23').toLowerCase();
    };

    export default function AgileSkillsComponent() {
    const [agileSkills, setAgileSkills] = useState<AgileSkills | null>(null);
    const [myComponent, setMyComponent] = useState(<></>);

    // Using useSearchParams to get the query parameter
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get('searchQuery') || ''; // or provide default empty string

    useEffect(() => {
        async function fetchData() {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/agileSkills`);
            if (response.ok) {
            const data: AgileSkills = await response.json();
            setAgileSkills(data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (agileSkills) {
        const filteredAgileSkills = agileSkills.agile.filter(skill =>
            skill.toLowerCase().includes(searchQuery)
        );
        const filteredCertifications = agileSkills.certification.filter(cert =>
            cert.toLowerCase().includes(searchQuery)
        );

        const component = (
            <div className="max-w-full mx-auto px-4 py-8 text-center">
            {filteredAgileSkills.length > 0 || filteredCertifications.length > 0 ? (
                <>
                <h1 className="text-3xl font-bold mb-8 text-[#4A1942]">AGILE SKILLS</h1>
                {filteredAgileSkills.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {filteredAgileSkills.map((skill, index) => (
                        <div
                        className="bg-[#F0F0F0] rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
                        key={skill + index}
                        >
                        <div className="text-center pt-4 pb-2 w-full h-16 flex items-center justify-center">
                            <Image
                            src={`/images/agile/${transformSkillName(skill)}.png`}
                            alt={`${skill} logo`}
                            width={50}
                            height={50}
                            layout="intrinsic"
                            />
                        </div>
                        <div className="px-4 pb-4 w-full flex items-center justify-center">
                            <h2 className="text-[#4A1942] text-md font-normal">{skill}</h2>
                        </div>
                        </div>
                    ))}
                    </div>
                )}
                {filteredCertifications.length > 0 && (
                    <>
                    <h2 className="text-2xl font-bold pt-14 pb-10 text-[#893168]">Certifications</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:h-72 lg:h-60">
                        {filteredCertifications.map((cert, index) => (
                        <div
                            className="bg-[#F0F0F0] rounded-lg overflow-hidden shadow-lg flex transition-transform transform hover:scale-105"
                            key={cert + index}
                        >
                            <div className="flex-shrink-0 w-1/2 h-full relative">
                            <Image
                                src={`/images/certification/${transformSkillName(cert)}.png`}
                                alt={`${cert} logo`}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-l"
                            />
                            </div>
                            <div className="flex flex-col justify-center w-1/2 px-4 py-2">
                            <h2 className="text-[#4A1942] text-md font-normal pb-4">{cert}</h2>
                            <a
                                href={`/pdfs/${transformSkillName(cert)}.pdf`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#d5556c] underline text-md mt-1"
                            >
                                View Certificate
                            </a>
                            </div>
                        </div>
                        ))}
                    </div>
                    </>
                )}
                </>
            ) : (
                <h1 className="text-3xl font-bold mb-8 text-[#4A1942]"></h1>
            )}
            </div>
        );

        setMyComponent(component);
        }
    }, [agileSkills, searchQuery]);

    return <div className="bg-[#F9F9F9] px-8 md:px-10 lg:px-16 overflow-x-hidden">{myComponent}</div>;
    }

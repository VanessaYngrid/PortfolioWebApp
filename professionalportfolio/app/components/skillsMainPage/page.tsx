'use client';

import { useRouter } from "next/navigation";

export default function SkillsMainPage() {

    const router = useRouter();

    const skills = [
        { name: 'Front-end', bgImage: 'url(/images/skills/frontend.jpg)' },
        { name: 'Back-end', bgImage: 'url(/images/skills/backend.jpg)' },
        { name: 'Database', bgImage: 'url(/images/skills/database.jpg)' },
        { name: 'Technology Tools', bgImage: 'url(/images/skills/techtools.jpg)' },
        { name: 'Agile Methodologies', bgImage: 'url(/images/skills/agile.jpg)' },
        { name: 'Certifications', bgImage: 'url(/images/skills/certifications.jpg)' },
        { name: 'Languages', bgImage: 'url(/images/skills/languages.jpg)' },
        { name: 'Soft Skills', bgImage: 'url(/images/skills/softskills.jpg)' }
    ];

    return (
        <div id="skillsmain" className="overflow-x-hidden bg-[#4A1942] text-center py-14 px-8 md:px-12 lg:px-32">
            <h1 className="text-[#EAEAEA] text-4xl font-bold mb-10 font-sans">MY SKILLS</h1> 
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className={`relative flex items-center justify-center h-48 transition-transform transform bg-cover bg-center text-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105`}
                        style={{ backgroundImage: skill.bgImage }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg"></div>
                        <p className="relative text-xl md:text-2xl font-normal">{skill.name}</p>
                    </div>
                ))}
            </div>
            <div className="mt-12">
                <a 
                    onClick={() => router.push('/components/skills')}
                    className="inline-block bg-[#6B4C7C] text-white py-3 px-8 rounded-full cursor-pointer hover:bg-[#4C3A61] transition"
                >
                    Discover My Full Skill Set
                </a>
            </div>
        </div>
    );
}
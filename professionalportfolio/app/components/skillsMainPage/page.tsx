'use client';

import router from "next/router";

export default function SkillsMainPage() {
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
        <div className="overflow-x-hidden bg-[#4A1942] text-center py-14 px-8 md:px-40">
            <h1 className="text-[#EAEAEA] text-3xl font-bold mb-10 font-sans">MY SKILLS</h1> 
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className={`relative flex items-center justify-center h-48 transition-transform transform bg-cover bg-center text-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105`}
                        style={{ backgroundImage: skill.bgImage }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg"></div>
                        <p className="relative text-2xl font-normal">{skill.name}</p>
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




/*'use client';

import router from "next/router";

export default function SkillsMainPage() {
    return (
        <div className="overflow-x-hidden bg-[#4A1942] text-center py-10 px-8 md:px-16">
            <h1 className="text-[#EAEAEA] text-4xl font-bold mb-8">MY SKILLS</h1> 
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
                {['Front-end', 'Back-end', 'Database', 'Technology Tools', 'Agile Methodologies', 'Certifications', 'Languages', 'Soft Skills'].map((skill, index) => (
                    <div key={index} className={`flex items-center justify-center h-40 border border-gray-600 transition-transform transform ${index % 4 === 0 ? 'rounded-tl-lg rounded-bl-lg' : ''} ${index % 4 === 3 ? 'rounded-tr-lg rounded-br-lg' : ''} bg-[#2E1C2B] shadow-lg hover:bg-[#893168] hover:shadow-xl`} >
                        <p className="text-[#EAEAEA] text-xl font-semibold">{skill}</p>
                    </div>
                ))}
            </div>
            <div className="mt-12">
                <a 
                    onClick={() => router.push('/components/skills')}
                    className="inline-block bg-[#893168] text-white py-3 px-8 rounded-full cursor-pointer"
                >
                    Discover My Full Skill Set
                </a>
            </div>
        </div>
    );
}*/



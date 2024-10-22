'use client';

import router from "next/router";

export default function SkillsMainPage(){
    return (
        <div className="overflow-x-hidden bg-white text-center py-10 px-8 md:px-16">
            <h1 className="text-black text-3xl font-bold">MY SKILLS</h1> 
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 pt-14">
                {['Front-end', 'Back-end', 'Database', 'Technology Tools', 'Agile Methologies', 'Certifications', 'Languages', 'Soft Skills'].map((word, index) => (
                    <div key={index} className="bg-gray-300 h-32 border border-white flex items-center justify-center">
                        <p>{word}</p>
                    </div>
                ))}
            </div>
            <div className="mt-10">
                <button 
                    onClick={() => router.push('/components/skills')}
                    className="inline-block bg-[#6a0dad] text-white py-2 px-6 rounded-full hover:bg-[#5b0c98] transition"
                >
                    Explore my skills
                </button>
            </div>
        </div>
    );
}
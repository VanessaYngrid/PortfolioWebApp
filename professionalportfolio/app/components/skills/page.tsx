'use client';

import { useState } from 'react';
import AgileSkillsComponent from "../agileSkills/page";
import Carousel from "../carousel/page";
import Contact from "../contact/page";
import Footer from "../footer/page";
import LanguagesSkills from "../languageSkills/page";
import Navbar from "../navbar/page";
import SoftSkillsComponent from "../softSkills/page";
import TechSkills from "../techSkills/page";

export default function Skills(){

    const [searchQuery, setSearchQuery] = useState("");

    // Handle the search input change
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    return(
        <div className="bg-[#F9F9F9] overflow-x-hidden">
            <Navbar/>
            <Carousel/>
            <div className="max-w-xl mx-auto pb-4 px-8 lg:px-8 pt-8 text-center">
                <p className="text-lg text-gray-700 mb-4">Use the search bar below to find specific skills in my portfolio:</p>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 pl-10 text-md text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-[#4A1942] focus:border-[#6e2d63]"
                        placeholder="Explore my skills..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        required
                    />
                </div>
            </div>
            <TechSkills searchQuery={searchQuery}/>
            <AgileSkillsComponent searchQuery={searchQuery}/>
            <LanguagesSkills searchQuery={searchQuery}/>
            <SoftSkillsComponent searchQuery={searchQuery}/>
            <Contact/>
            <Footer/>
        </div>
    )
}
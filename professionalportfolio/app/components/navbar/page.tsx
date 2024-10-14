'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Navbar() {
    // State variable 'isOpen' and its setter function 'setIsOpen'
    // Initially, 'isOpen' state is 'false', indicating the menu is hidden
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    //items-center => para centrar horizontalmente
    //justify-center => para centrar verticalmente
    return (
    <nav className="bg-white lg:py-4 md:px-12 lg:px-36 p-4"> {/* Navbar container with background color and padding */}
        <div className="container mx-auto flex flex-wrap items-center justify-between">
            <div className="text-black text-lg">Vanessa Vargas</div>
                {/* Menu toggle button (hamburger icon) visible on small screens */}
                {/* md:hidden - Button is visible only on small screens */}
                {/* setIsOpen(!isOpen) -  Toggle 'isOpen' state on button click - onClick attribute */}
                <button className="text-black block lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {/* Hamburger Icon */}
                    {/* svg - Scalable Vector Graphics*/}
                    {/* strokeLinejoin , to set the shape of the corner */}
                    {/*strokeLinecap - sets the shape of the ends of the lines - width of the lines=2*/}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
        
            {/* Menu items container: hidden on small screens unless 'isOpen' is true */}
            <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? '' : 'hidden'}`}>
                <ul className="flex flex-col lg:flex-row lg:space-x-4 mt-4 lg:mt-0">
                    {/* Menu items stacked vertically on small screens, horizontally on medium+ screens */}
                    <li onClick={() => router.push('/')} className="text-black block py-2 px-4 cursor-pointer">Home</li>
                    <li onClick={() => router.push('/components/education')} className="text-black block py-2 px-4 cursor-pointer">Education</li>
                    <li onClick={() => router.push('/components/experience')} className="text-black block py-2 px-4 cursor-pointer">Experience</li>
                    <li onClick={() => router.push('/components/skills')} className="text-black block py-2 px-4 cursor-pointer">Skills</li>
                    <li onClick={() => router.push('/components/projects')} className="text-black block py-2 px-4 cursor-pointer">Projects</li>
                    <li onClick={() => router.push('/components/contact')} className="text-black block py-2 px-4 cursor-pointer">Contact</li>
                </ul>
            </div>
        </div>
    </nav>
    );
}

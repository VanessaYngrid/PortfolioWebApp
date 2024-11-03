'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Navbar() {
    // State variable 'isOpen' and its setter function 'setIsOpen'
    // Initially, 'isOpen' state is 'false', indicating the menu is hidden
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const handleMenuItemClick = (id: string) => {
        // Navigate to the home page
        router.push(`/#${id}`);
        setIsOpen(false); // Close the menu after navigation
    };
    
    return (
    <nav className="bg-[#4A1942] lg:py-4 md:px-10 lg:px-36 py-4 px-8"> {/* Navbar container with background color and padding */}
        <div className="container mx-auto flex flex-wrap items-center justify-between">
            <div className="text-white text-lg">Vanessa Vargas</div>
                {/* Menu toggle button (hamburger icon) visible on small screens */}
                {/* md:hidden - Button is visible only on small screens */}
                {/* setIsOpen(!isOpen) -  Toggle 'isOpen' state on button click - onClick attribute */}
                <button className="text-white block lg:hidden" onClick={() => setIsOpen(!isOpen)}>
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
                    <li>
                        <a onClick={() => handleMenuItemClick('home')} className="text-white block py-2 px-4 cursor-pointer">Home</a>
                    </li>
                    <li>
                        <a onClick={() => handleMenuItemClick('about')} className="text-white block py-2 px-4 cursor-pointer">About</a>
                    </li>
                    <li>
                        <a onClick={() => handleMenuItemClick('education')} className="text-white block py-2 px-4 cursor-pointer">Education</a>
                    </li>
                    <li>
                        <a onClick={() => handleMenuItemClick('skillsmain')} className="text-white block py-2 px-4 cursor-pointer">Skills</a>
                    </li>
                    <li>
                        <a onClick={() => handleMenuItemClick('projectsmain')} className="text-white block py-2 px-4 cursor-pointer">Projects</a>
                    </li>
                    <li>
                        <a onClick={() => handleMenuItemClick('experience')} className="text-white block py-2 px-4 cursor-pointer">Experience</a>
                    </li>
                    <li>
                        <a onClick={() => handleMenuItemClick('contact')} className="text-white block py-2 px-4 cursor-pointer">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}

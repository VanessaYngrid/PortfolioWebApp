'use client'

import { useState, useEffect } from "react";

export default function AnimatedText() {
    
    const specialties = [
        "Web Development",
        "Mobile Development",
        "Agile Methodologies"
    ];

    const [currentSpecialty, setCurrentSpecialty] = useState(specialties[0]);
    const [index, setIndex] = useState(0);
    const [slideIn, setSlideIn] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIn(false); // Start slide-out
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % specialties.length);
                setSlideIn(true); // Start slide-in
            }, 500); // Delay for slide-out
        }, 2000); // Change every 2 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setCurrentSpecialty(specialties[index]);
    }, [index]);

    return (
        <span className={`font-semibold transition-transform duration-500 ${slideIn ? 'translate-y-0' : 'translate-y-5 opacity-0'}`}>
            {currentSpecialty}
        </span>
    );
}
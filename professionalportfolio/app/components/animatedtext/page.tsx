'use client'

import { useState, useEffect, useMemo } from "react";

export default function AnimatedText() {
    // Use useMemo to memoize the specialties array so it doesn't cause re-renders
    const specialties = useMemo(() => [
        "Web Development",
        "Business Analysis",
        "Agile Methodologies"
    ], []); // Empty array means it won't change

    const [currentSpecialty, setCurrentSpecialty] = useState(specialties[0]);
    const [index, setIndex] = useState(0);
    const [slideIn, setSlideIn] = useState(true);

    // First useEffect: Update the index and manage the slide-in/out animation
    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIn(false); // Start slide-out
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % specialties.length); // Increment index cyclically
                setSlideIn(true); // Start slide-in
            }, 500); // Delay for slide-out
        }, 2000); // Change every 2 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [specialties.length]); // Only include specialties.length as a dependency

    // Second useEffect: Update the current specialty based on index
    useEffect(() => {
        setCurrentSpecialty(specialties[index]); // Update current specialty based on the index
    }, [index, specialties]); // Include both index and specialties in the dependency array

    return (
        <span className={`font-semibold transition-transform duration-500 ${slideIn ? 'translate-y-0' : 'translate-y-5 opacity-0'}`}>
            {currentSpecialty}
        </span>
    );
}

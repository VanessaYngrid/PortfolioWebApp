    'use client';

    import { useState, useEffect } from 'react';
    import Carousel from "../carousel/page";
    import Contact from "../contact/page";
    import Footer from "../footer/page";
    import LanguagesSkills from "../languageSkills/page";
    import Navbar from "../navbar/page";
    import SoftSkillsComponent from "../softSkills/page";
    import TechSkills from "../techSkills/page";
    import AgileSkillsComponent from '../agileSkills/page';
    import SearchBar from '../searchBar/searchBar';

    export default function Skills() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredSoftSkills, setFilteredSoftSkills] = useState<string[]>([]);

    // Simulamos la carga de las habilidades (esto debería venir de tu API o base de datos)
    const [allSoftSkills, setAllSoftSkills] = useState<string[]>([]);
    
    useEffect(() => {
        async function fetchData() {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/softSkills`, { cache: 'no-cache' });
            if (response.ok) {
            const data = await response.json();
            setAllSoftSkills(data.softSkills); // Suponemos que el API devuelve un array de habilidades
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        }
        fetchData();
    }, []);

    useEffect(() => {
        // Filtrar las habilidades cuando cambia searchQuery
        if (allSoftSkills) {
        const filtered = allSoftSkills.filter(skill =>
            skill.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredSoftSkills(filtered);
        }
    }, [allSoftSkills, searchQuery]);

    return (
        <div className="bg-[#F9F9F9] overflow-x-hidden">
        <Navbar />
        <Carousel />
        <div className="max-w-xl mx-auto pb-4 px-8 lg:px-8 pt-8 text-center">
            <p className="text-lg text-gray-700 mb-4">
            Use the search bar below to find specific skills in my portfolio:
            </p>
            {/* Usamos el componente SearchBar para manejar el estado de búsqueda */}
            <SearchBar onSearch={setSearchQuery} />
        </div>

        {/* Pasamos las habilidades filtradas al componente SoftSkillsComponent */}
        <TechSkills />
        <AgileSkillsComponent />
        <LanguagesSkills />
        <SoftSkillsComponent filteredSkills={filteredSoftSkills} />
        <Contact />
        <Footer />
        </div>
    );
    }

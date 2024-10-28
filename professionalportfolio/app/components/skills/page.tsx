'use client';

import AgileSkillsComponent from "../agileSkills/page";
import Carousel from "../carousel/page";
import Contact from "../contact/page";
import Footer from "../footer/page";
import LanguagesSkills from "../languageSkills/page";
import Navbar from "../navbar/page";
import SoftSkillsComponent from "../softSkills/page";
import TechSkills from "../techSkills/page";

export default function Skills(){
    return(
        <div className="overflow-x-hidden">
            <Navbar/>
            <Carousel/>
            <TechSkills/>
            <AgileSkillsComponent/>
            <LanguagesSkills/>
            <SoftSkillsComponent/>
            <Contact/>
            <Footer/>
        </div>
    )
}
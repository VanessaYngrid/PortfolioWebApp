import AgileSkillsComponent from "../agileSkills/page";
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
            <TechSkills/>
            <AgileSkillsComponent/>
            <LanguagesSkills/>
            <SoftSkillsComponent/>
            <Footer/>
        </div>
    )
}
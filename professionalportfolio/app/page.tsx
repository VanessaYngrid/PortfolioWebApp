import BannerIntro from "./components/bannerintro/page";
//import Contact from "./components/contact/page";
import Education from "./components/education/page";
import WorkExperience from "./components/experience/page";
import Footer from "./components/footer/page";
import Navbar from "./components/navbar/page";
import Presentation from "./components/presentation/page";
import ProjectsMainPage from "./components/projectsMainPage/page";
import SkillsMainPage from "./components/skillsMainPage/page";

export default function Home() {
  return (
  <div className="bg-[#f9f9f9] overflow-x-hidden">
    <Navbar/>
    <BannerIntro/>
    <Presentation/>
    <Education/>
    <SkillsMainPage/>
    <ProjectsMainPage/>
    <WorkExperience/> 
    <Footer/>
  </div>    
  );
}

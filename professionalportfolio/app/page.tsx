import BannerIntro from "./components/bannerintro/page";
import Footer from "./components/footer/page";
import Navbar from "./components/navbar/page";
import Presentation from "./components/presentation/page";

export default function Home() {
  return (
  <div className="overflow-x-hidden">
    <Navbar/>
    <BannerIntro/>
    <Presentation/>
    <Footer/>
  </div>    
  );
}

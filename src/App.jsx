import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectShowcase from "./components/ProjectShowcase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Education from "./components/Education";
import Carousel from "./components/Carousel";
import bg1 from "./assets/bg-white1.jpg";
import bg2 from "./assets/bg-white2.jpg";
import bg3 from "./assets/bg-white3.jpg";

function App() {
  const slides = [bg3, bg2, bg1];

  const handleClickAbout = () => {
    const about = document.getElementById("about");
    if (!about) return;
    about.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="overflow-hidden relative">
        <Header />
        <Carousel slides={slides} />
        <button onClick={handleClickAbout}>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="absolute w-full bottom-10 animate-bounce"
            size="lg"
          />
        </button>
      </div>
      <div id="about" className="py-14 border-b border-slate-200">
        <About />
      </div>
      <div id="portfolio" className="py-4">
        <ProjectShowcase />
      </div>
      <div
        id="education"
        className="relative bg-[url('./assets/project-12.jpg')] bg-top"
      >
        <div className="absolute h-full w-full bg-black opacity-80 z-10"></div>
        <Education />
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </>
  );
}

export default App;

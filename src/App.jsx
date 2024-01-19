import About from "./components/common/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Education from "./components/common/Education";
import Carousel from "./components/common/Carousel";
import ProjectShowcase from "./components/common/ProjectShowcase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { slides } from "./data/slides";

function App() {
  const handleClickAbout = () => {
    const about = document.getElementById("about");
    if (!about) return;
    about.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <Carousel slides={slides} />
        <button onClick={handleClickAbout}>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="absolute w-full bottom-6 animate-bounce"
            size="lg"
          />
        </button>
      </div>
      <div id="about" className="py-14 border-b border-slate-200 max-lg:py-4">
        <About />
      </div>
      <div id="portfolio" className="py-4">
        <ProjectShowcase />
      </div>
      <div
        id="education"
        className="relative bg-[url('./assets/common/bg-edu.jpg')]"
      >
        <div className="absolute h-full w-full bg-black opacity-80 z-10" />
        <Education />
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </>
  );
}

export default App;

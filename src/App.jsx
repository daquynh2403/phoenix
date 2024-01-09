import About from "./components/About"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Introduce from "./components/Introduce"
import ProjectShowcase from "./components/ProjectShowcase"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Education from "./components/Education"

function App() {

  return (
    <>
      <div className="bg-[url('./assets/bg-white3.jpg')] h-screen overflow-hidden relative">
        <Header />
        <Introduce />
        <a href="#about" className="scroll-down smooth-scroll">
          <FontAwesomeIcon icon={faChevronDown} className="absolute w-full bottom-6 animate-bounce" size="lg" />
        </a>
      </div>
      <div id="about" className="py-20 border-b border-slate-200">
        <About />
      </div>
      <div id="portfolio" className="py-10">
        <ProjectShowcase />
      </div>
      <div id="education" className="relative bg-[url('./assets/project-12.jpg')] bg-top">
        <div className="absolute h-full w-full bg-black opacity-80 z-10"></div>
        <Education />
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </>
  )
}

export default App

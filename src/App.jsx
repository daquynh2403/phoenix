import About from "./components/About"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Introduce from "./components/Introduce"
import ProjectShowcase from "./components/ProjectShowcase"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function App() {

  return (
    <>
      <div className="bg-[url('./assets/bg-white3.jpg')] h-screen overflow-hidden">
        <Header />
        <Introduce />
        <a href="#about" className="scroll-down smooth-scroll">
          <FontAwesomeIcon icon={faChevronDown} className="absolute bottom-6 w-full animate-bounce" size="lg" />
        </a>
      </div>
      <About />
      <ProjectShowcase />
      <Footer />
    </>
  )
}

export default App

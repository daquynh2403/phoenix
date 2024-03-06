import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [headerStyle, setHeaderStyle] = useState("h-24 text-slate-700");
  const [openNav, setOpenNav] = useState(false);

  const shrunkHeader = () => {
    if (window.scrollY > 0) setHeaderStyle("h-14 bg-slate-800 text-slate-100");
    else setHeaderStyle("h-24");
  };

  useEffect(() => {
    window.addEventListener("scroll", shrunkHeader);
  }, []);

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (!sectionElement) return;
    sectionElement.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="items-center w-full h-fit fixed z-40">
      <div
        className={`flex w-full justify-between ${headerStyle} items-center transition-all duration-500`}
      >
        <div className="font-sans font-bold text-2xl ml-20 max-md:text-lg max-md:ml-10">
          Quin.dev
        </div>
        <ul className="flex font-extralight gap-6 tracking-wider leading-4 mr-20 max-lg:hidden">
          <li className="underline underline-offset-8 decoration-2">
            <a href="/">Home</a>
          </li>
          <li>
            <button onClick={() => scrollToSection("about")}>About me</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("portfolio")}>
              Portfolio
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("education")}>
              Education
            </button>
          </li>
        </ul>
        <button
          className="lg:hidden mr-20 max-md:mr-10"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>
      <div
        className={`w-full ${
          openNav ? "opacity-100 z-50 visible" : "opacity-0 hidden"
        } transition-all duration-500`}
      >
        <ul className="font-normal tracking-wider leading-4 bg-slate-900/50 text-slate-50 text-2xl max-md:text-lg">
          <li className="p-4 text-center border-b border-slate-400 max-md:p-2">
            <a href="/">Home</a>
          </li>
          <li className="p-4 text-center border-b border-slate-400 max-md:p-2">
            <button onClick={() => scrollToSection("about")}>About me</button>
          </li>
          <li className="p-4 text-center border-b border-slate-400 max-md:p-2">
            <button onClick={() => scrollToSection("portfolio")}>
              Portfolio
            </button>
          </li>
          <li className="p-4 text-center border-b border-slate-400 max-md:p-2">
            <button onClick={() => scrollToSection("education")}>
              Education
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

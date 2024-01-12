import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePhoneFlip,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faCopy } from "@fortawesome/free-regular-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faVuejs,
  faNodeJs,
  faGithub,
  faLinkedinIn,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import project9 from "../assets/project-9.jpg";
import Notification from "./Notification";
import { useState } from "react";

function About() {
  const [show, setShow] = useState(false);
  const [clickItem, setClickItem] = useState(0);

  const techStackData = [
    { icon: faHtml5, color: "", name: "HTML5" },
    { icon: faCss3Alt, color: "", name: "CSS3" },
    { icon: faJs, color: "", name: "Javascript" },
    { icon: faReact, color: "", name: "ReactJs" },
    { icon: faVuejs, color: "", name: "VueJs" },
    { icon: faNodeJs, color: "", name: "NodeJs" },
    { icon: faPython, color: "", name: "Python" },
  ];
  const socialLinksData = [
    {
      icon: faLinkedinIn,
      color: "",
      link: "https://www.linkedin.com/in/qu%E1%BB%B3nh-l%C3%AA-b7008324a/",
      name: "linkedin.com/quỳnh-lê",
    },
    {
      icon: faGithub,
      color: "",
      link: "https://github.com/daquynh2403",
      name: "github.com/daquynh2403",
    },
    {
      icon: faEnvelope,
      color: "",
      name: "daquynh2403@gmail.com",
      isCopy: true,
      idItem: "gmail",
    },
    {
      icon: faSquarePhoneFlip,
      color: "",
      name: "+84 865 781 317 (Zalo)",
      isCopy: true,
      idItem: "phone",
    },
  ];
  const handleClick = (id, clickItem) => {
    const textContent = document.getElementById(id);
    console.log(textContent.value);
    const copyAction = navigator.clipboard.writeText(textContent.value);
    copyAction
      .then(() => {
        setShow(true);
        setClickItem(clickItem);

        setTimeout(() => {
          setShow(false);
        }, 2000);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="flex">
      <div className="w-1/2 mx-auto">
        <div className="text-5xl font-extralight text-slate-700 tracking-wide border-l-4 border-slate-200 px-3 pb-3">
          About <span className="font-bold">me</span>
        </div>
        <div className="mt-5 font-extralight tracking-wide">
          <div className="break-words text-xl text-slate-900">
            I am a highly motivated and dedicated front-end developer with a
            Bachelor Degree in Computer Science and 2 years of professional
            experience. Known for my attention to detail, creativity, and
            problem-solving abilities, I strive to create visually stunning and
            user-friendly web applications.
          </div>
          <div className="mt-10 grid grid-cols-2 gap-2 border-l-2 border-slate-500 pb-2 w-[50rem]">
            {socialLinksData.map((item, index) => (
              <div key={index} className="mt-3">
                <FontAwesomeIcon
                  icon={item.icon}
                  style={{ color: item.color }}
                  size="xl"
                  className="w-10"
                />
                {item.isCopy ? (
                  <Notification
                    show={show}
                    text="Copied"
                    indexItem={index}
                    clickItem={clickItem}
                  >
                    <button
                      className="p-1 font-light hover:bg-slate-800 hover:text-white transition-all duration-500"
                      onClick={() => handleClick(item.idItem, index)}
                      id={item.idItem}
                      value={item.name}
                    >
                      {item.name}
                      <FontAwesomeIcon icon={faCopy} className="ml-1" />
                    </button>
                  </Notification>
                ) : (
                  <>
                    <a
                      href={item.link}
                      target="_blank"
                      className="p-1 font-light hover:bg-slate-800 hover:text-white transition-all duration-500"
                      rel="noreferrer"
                    >
                      {item.name}
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="ml-1"
                      />
                    </a>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="text-2xl font-extralight text-slate-700 tracking-wide border-l-2 border-slate-500 p-2 mt-10">
          Tech <span className="font-bold">stack</span>
        </div>
        <div className="grid grid-cols-4 text-center divide-y divide-x divide-solid text-slate-600 w-[45rem] mt-4">
          {techStackData.map((item, index) => (
            <div className="py-4" key={index}>
              <FontAwesomeIcon
                icon={item.icon}
                style={{ color: item.color }}
                size="2xl"
                className="h-20  hover:text-slate-800 transition-all duration-300"
              />
              <div className="text-center font-light">{item.name}</div>
            </div>
          ))}
          <div className="h-full w-full">
            <svg
              width="90px"
              height="90px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full mx-auto mb-1 fill-slate-700 hover:fill-slate-800 transition-all duration-300"
            >
              <path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"></path>
            </svg>
            <div className="text-center font-light">TailwindCSS</div>
          </div>
        </div>
      </div>
      <div className="w-2/5 flex justify-center items-center">
        <img src={project9} className="w-[30rem] h-full object-cover" />
      </div>
    </div>
  );
}

export default About;

import { useMemo, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { techStack, socialLinks, techStackCategory } from "../../data/about";
import project1 from "../../assets/projects/project-1.jpg";
import { useElementOnScreen } from "../../hooks/useElementOnScreen";

function About() {
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState("frontend");

  const parRef = useRef(null);
  const [descRef, desVisible] = useElementOnScreen({
    root: parRef?.current,
    rootMargin: "0px",
    threshold: 0.5,
  });

  const handleClick = (id) => {
    if (id != "gmail") return;
    const copyAction = navigator.clipboard.writeText("daquynh2403@gmail.com");
    copyAction
      .then(() => {
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 2000);
      })
      .catch((error) => console.error(error));
  };
  const filterTechStack = useMemo(() => {
    return techStack.filter((item) => item.type === category);
  }, [category]);

  return (
    <div ref={parRef} className="flex overflow-clip max-xl:block">
      <div className="w-1/2 mx-auto max-xl:w-full max-xl:text-center">
        <div className="text-5xl font-extralight text-slate-700 tracking-wide border-l-4 border-slate-200 px-3 pb-3 max-md:text-4xl max-md:border-0 max-md:p-0">
          About <span className="font-bold">me</span>
        </div>
        <div
          ref={descRef}
          className={`${
            desVisible
              ? "animate-[fadeLeftIn_1s_ease-in-out] visible"
              : "invisible"
          }  mt-5 font-extralight tracking-wide`}
        >
          <div className="break-words text-xl text-slate-900 max-md:text-base">
            I am a highly motivated and dedicated front-end developer. Known for
            my attention to detail, creativity, and problem-solving abilities, I
            strive to create visually stunning and user-friendly web
            applications.
          </div>
          <div className="mt-10 flex gap-4 pb-2 max-xl:w-full max-xl:justify-center max-md:text-sm max-sm:grid max-sm:grid-cols-2 max-sm:mt-2">
            {socialLinks.map((item, index) => (
              <div className="relative" key={index}>
                <div className="border px-4 py-1 rounded-full hover:shadow-lg hover:shadow-slate-300 transition-all duration-300">
                  {item.id === "gmail" && show ? (
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      style={{ color: "#5fd534" }}
                      className="mr-2"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={item.icon}
                      style={{ color: item.color }}
                      size="lg"
                      className="mr-2"
                    />
                  )}
                  <a
                    href={item.link}
                    target={item.id !== "gmail" ? "_blank" : "_self"}
                    className="font-extralight"
                    rel="noreferrer"
                    download={item.id === "cv"}
                    onClick={() => handleClick(item.id)}
                  >
                    {item.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-2xl font-extralight text-slate-700 tracking-wide border-l-2 border-slate-500 p-2 mt-10 max-xl:mt-4">
          Tech <span className="font-bold">stack</span>
        </div>
        <div
          className={`${
            desVisible
              ? "animate-[fadeLeftIn_2s_ease-in-out] visible"
              : "invisible"
          } w-[45rem] mt-4 max-xl:w-full`}
        >
          <div className="mt-10 flex gap-4 pb-2 max-xl:w-full max-xl:justify-center max-md:text-sm max-sm:grid max-sm:grid-cols-2 max-sm:mt-2">
            {techStackCategory.map((item, index) => (
              <button
                key={index}
                className="border px-4 py-1 rounded-full font-extralight tracking-wide text-slate-900 hover:shadow-lg focus:bg-slate-800 focus:text-slate-50 hover:shadow-slate-300 transition-all duration-300"
                onClick={() => setCategory(item.type)}
              >
                <FontAwesomeIcon icon={item.icon} className="mr-2" />
                {item.name}
              </button>
            ))}
          </div>
          <div className="flex gap-10 *:border">
            {filterTechStack.map((item) => (
              <div className="py-4 border-slate-200" key={item.id}>
                <img src={item.id} alt={item.name} className="w-20 h-28" />
                <div className="">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`${
          desVisible
            ? "animate-[fadeRightIn_3s_ease-in-out] visible"
            : "invisible"
        } w-2/5 flex justify-center items-center max-xl:w-full max-xl:mt-10`}
      >
        <img
          src={project1}
          className="w-[30rem] h-[30rem] custom-img animate-morph object-cover object-right  max-xl:w-[16rem] max-xl:h-[16rem] max-sm:w-[10rem] max-sm:h-[10rem]"
        />
      </div>
    </div>
  );
}

export default About;

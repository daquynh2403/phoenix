import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { techStack, socialLinks } from "../../data/about";
import project1 from "../../assets/projects/project-1.jpg";
import { useElementOnScreen } from "../../hooks/useElementOnScreen";

function About() {
  const [show, setShow] = useState(false);
  const [descRef, desVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  const [techRef, techVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });

  const [imgRef, imgVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
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
  return (
    <div className="flex overflow-clip max-xl:block">
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
          <div className="mt-10 flex gap-4 pb-2 max-xl:w-full max-xl:justify-center max-md:text-sm max-sm:grid max-sm:grid-cols-2 max-sm:mt-2 ">
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
          ref={techRef}
          className={`${
            techVisible
              ? "animate-[fadeLeftIn_2s_ease-in-out] visible"
              : "invisible"
          } grid grid-cols-4 text-center text-slate-900/70 w-[45rem] mt-4 max-xl:w-full`}
        >
          {techStack.map((item, index) => (
            <div
              className={`py-4 ${
                [0, 1, 2, 3].includes(index) ? "border-b" : ""
              } ${index != 3 ? "border-r" : ""} border-slate-200`}
              key={index}
            >
              <FontAwesomeIcon
                icon={item.icon}
                style={{ color: item.color }}
                size="2xl"
                className="h-20 max-md:h-10"
              />
              <div className="text-center font-normal">{item.name}</div>
            </div>
          ))}
          <div className="h-full w-full=">
            <svg
              width="90px"
              height="90px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full mx-auto mb-1 fill-slate-900/70 max-md:h-10 max-md:mt-4"
            >
              <path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"></path>
            </svg>
            <div className="text-center font-normal">TailwindCSS</div>
          </div>
        </div>
      </div>
      <div
        ref={imgRef}
        className={`${
          imgVisible
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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { education } from "../../data/education";
import { useRef } from "react";
import { useElementOnScreen } from "../../hooks/useElementOnScreen";
// import imgEdu from "../../assets/common/img-edu.jpg";

function Education() {
  const parRef = useRef(null);
  const [eduRef, eduVisible] = useElementOnScreen({
    root: parRef.current,
    rootMargin: "0px",
    threshold: 0.1,
  });
  function checkEvenOdd(id) {
    return id % 2 === 0;
  }
  const animateBaseOnId = (id) => {
    if (eduVisible) {
      if (checkEvenOdd(id))
        return "animate-[fadeRightIn_1s_ease-in-out] visible";
      else return "animate-[fadeLeftIn_1s_ease-in-out] visible";
    } else return "invisible";
  };
  return (
    <div className="flex z-10 relative py-[128px] max-md:block max-md:py-14">
      <div className="w-1/3 ml-24 mb-10 max-lg:ml-8 max-md:w-full max-md:text-center max-md:m-0">
        <div className="text-5xl font-thin text-white tracking-wide border-l-4 border-slate-700 p-3 max-lg:text-4xl max-md:border-0 max-md:pb-10">
          Education
        </div>
      </div>
      <div
        ref={parRef}
        className="grid grid-rows-2 grid-cols-2 w-full gap-20 font-extralight text-slate-200 tracking-wide max-lg:gap-4"
      >
        {education.map((edu) => (
          <div
            ref={eduRef}
            key={edu.id}
            className={`flex gap-5 max-md:mb-6 max-md:w-full max-md:block max-md:text-center ${animateBaseOnId(
              edu.id
            )}`}
          >
            <FontAwesomeIcon
              icon={edu.icon}
              className="w-10 self-start text-4xl p-3 border border-purple-50 rounded-lg bg-slate-200/20"
            />
            <div className="ml-1 relative text-xl tracking-wider leading-5 font-semibold max-lg:text-sm max-md:ml-0 max-md:mt-4">
              {edu.title}
              <div className="font-thin mt-4">{edu.textOne}</div>
              <div className="font-thin mt-4">{edu.textTwo}</div>
              {/* <div className="flex gap-6 mt-4">
                <img
                  src={imgEdu}
                  alt="Image education"
                  className="w-40 rounded-xl hover:shadow-slate-50 hover:scale-125 duration-500 max-sm:m-auto"
                />
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;

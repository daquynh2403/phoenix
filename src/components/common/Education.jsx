import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { education } from "../../data/education";

function Education() {
  return (
    <div className="flex z-20 relative py-28 max-md:block max-md:py-2">
      <div className="w-1/3 ml-24 mb-10 max-lg:ml-8 max-md:w-full max-md:text-center max-md:m-0">
        <div className="text-5xl font-thin text-white tracking-wide border-l-4 border-slate-700 p-3 max-lg:text-4xl max-md:border-0 max-md:pb-2">
          Education
        </div>
      </div>
      <div className="grid grid-rows-2 grid-cols-2 w-full gap-20 font-extralight text-slate-200 tracking-wide max-md:block max-lg:gap-10">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="flex max-md:mb-6 max-md:w-full max-md:block max-md:text-center"
          >
            <FontAwesomeIcon
              icon={edu.icon}
              className="w-10 text-4xl self-center p-3"
            />
            <div className="ml-1 text-xl tracking-wider leading-5 font-semibold max-lg:text-base max-md:ml-0">
              {edu.title}
              <div className="font-thin mt-2">{edu.textOne}</div>
              <div className="font-thin">{edu.textTwo}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { array, string } from "prop-types";

function Project({ imgSrc, title, repo, live, desc, techstack }) {
  return (
    <div className="w-full flex h-96 relative tracking-wider leading-7 overflow-hidden group max-md:h-72 ">
      <div className="absolute bg-slate-800/60 w-1/2 h-full -translate-x-full group-hover:translate-x-0 z-50 transition-all duration-700 ease-in-out max-2xl:w-full">
        <div className="p-4 max-md:text-base">
          <div className="text-xl text-white font-bold">{title}</div>
          <div className="flex text-lg text-white font-thin my-4 ">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              <a className="mr-10 cursor-pointer" href={repo}>
                Repository
              </a>
            </div>
            <div className="flex items-center mt-2">
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="mr-2"
              />
              <a className="cursor-pointer" href={live}>
                Live Demo
              </a>
            </div>
          </div>
          <div className="text-lg font-thin text-white mb-4">{desc}</div>
          <div className="bg-slate-900/50 rounded-full w-fit px-2 py-1 flex gap-3 text-2xl text-slate-100">
            {techstack.map((tech, index) => (
              <FontAwesomeIcon key={index} icon={tech} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full">
        <img
          src={imgSrc}
          loading="lazy"
          alt="Project 1"
          className="w-full h-full group-hover:scale-125 object-cover transition-all duration-700 ease-in-out"
        />
      </div>
    </div>
  );
}

Project.propTypes = {
  imgSrc: string,
  title: string,
  repo: string,
  live: string,
  desc: string,
  techstack: array,
};

export default Project;

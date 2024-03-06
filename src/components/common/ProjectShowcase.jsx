import Project from "./Project";
import { projects } from "../../data/projects";

function ProjectShowcase() {
  return (
    <div className="pt-[128px] pb-4 px-4 bg-[#F9F8F8] max-sm:pt-14">
      <div className="text-5xl font-extralight text-slate-700 tracking-wide border-l-4 border-slate-200 p-3 ml-36 mb-14 max-md:text-4xl max-md:border-0 max-xl:text-center max-xl:mb-10 max-xl:ml-0 max-xl:p-0">
        Projects
        <span className="font-bold ml-3">showcase</span>
      </div>
      <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {projects.map((project) => (
          <Project
            key={project.id}
            imgSrc={project.imgSrc}
            title={project.title}
            repo={project.repo}
            live={project.live}
            desc={project.desc}
            techstack={project.techstack}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectShowcase;

import Project from "./Project";
import project4 from "../assets/project-4.jpg";
import project5 from "../assets/project-5.jpg";
import project6 from "../assets/project-6.jpg";
import project7 from "../assets/project-7.jpg";
import project8 from "../assets/project-8.jpg";
import project9 from "../assets/project-9.jpg";
import { faReact } from "@fortawesome/free-brands-svg-icons";

function ProjectShowcase() {
  const projectData = [
    {
      id: 1,
      imgSrc: project4,
      title: "LUNARI MARKET",
      repo: "#",
      live: "#",
      desc: "An e-commerce website.",
      techstack: [faReact, faReact, faReact, faReact, faReact],
    },
    {
      id: 2,
      imgSrc: project5,
      title: "SOLARI STORE",
      repo: "#",
      live: "#",
      desc: "An e-commerce website.",
      techstack: [faReact, faReact, faReact, faReact, faReact],
    },
    {
      id: 3,
      imgSrc: project6,
      title: "LUNARI MARKET",
      repo: "#",
      live: "#",
      desc: "An e-commerce website.",
      techstack: [faReact, faReact, faReact, faReact, faReact],
    },
    {
      id: 4,
      imgSrc: project7,
      title: "SOLARI STORE",
      repo: "#",
      live: "#",
      desc: "An e-commerce website.",
      techstack: [faReact, faReact, faReact, faReact, faReact],
    },
    {
      id: 5,
      imgSrc: project8,
      title: "LUNARI MARKET",
      repo: "#",
      live: "#",
      desc: "An e-commerce website.",
      techstack: [faReact, faReact, faReact, faReact, faReact],
    },
    {
      id: 6,
      imgSrc: project9,
      title: "SOLARI STORE",
      repo: "#",
      live: "#",
      desc: "An e-commerce website.",
      techstack: [faReact, faReact, faReact, faReact, faReact],
    },
  ];
  return (
    <div className="mt-12">
      <div className="text-5xl font-extralight text-slate-700 tracking-wide border-l-4 border-slate-200 p-3 ml-24 mb-10">
        Projects
        <span className="font-bold ml-3">showcase</span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {projectData.map((project) => (
          <Project
            key={project.id}
            imgSrc={project.imgSrc}
            title={project.title}
            repo={project.repo}
            live={project.live}
            desc={project.desc}
            t
            techstack={project.techstack}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectShowcase;

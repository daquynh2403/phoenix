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
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import QuinCV from "../assets/common/QuinCV.pdf";

export const techStack = [
  { icon: faHtml5, color: "", name: "HTML5" },
  { icon: faCss3Alt, color: "", name: "CSS3" },
  { icon: faJs, color: "", name: "Javascript" },
  { icon: faReact, color: "", name: "ReactJs" },
  { icon: faVuejs, color: "", name: "VueJs" },
  { icon: faNodeJs, color: "", name: "NodeJs" },
  { icon: faPython, color: "", name: "Python" },
];

export const socialLinks = [
  {
    id: "linkedin",
    icon: faLinkedinIn,
    color: "",
    link: "https://www.linkedin.com/in/qu%E1%BB%B3nh-l%C3%AA-b7008324a/",
    name: "LinkedIn",
  },
  {
    id: "git",
    icon: faGithub,
    color: "",
    link: "https://github.com/daquynh2403/phoenix",
    name: "Github",
  },
  {
    id: "gmail",
    icon: faEnvelope,
    color: "",
    link: "#!",
    name: "Copy Gmail",
  },
  {
    id: "cv",
    icon: faDownload,
    color: "",
    link: QuinCV,
    name: "Download CV",
  },
];

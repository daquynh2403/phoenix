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
import { faSquarePhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

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

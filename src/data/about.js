import {
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faCloudArrowUp, faDatabase, faDesktop, faDownload, faServer } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import html5 from '../assets/logo/html5.svg'
import css3 from '../assets/logo/css3.svg'
import javascript from '../assets/logo/javascript.svg'
import reactjs from '../assets/logo/reactjs.svg'
import nextjs from '../assets/logo/nextjs.svg'
import vue from '../assets/logo/vue.svg'
import tailwindcss from '../assets/logo/tailwindcss.svg'
import scss2 from '../assets/logo/scss2.svg'
import nodejs from '../assets/logo/nodejs.svg'
import python from '../assets/logo/python.svg'
import postgresql from '../assets/logo/postgresql.svg'
import aws from '../assets/logo/aws.svg'
import docker from '../assets/logo/docker.svg'
import kubernetes from '../assets/logo/kubernetes.svg'
import github from '../assets/logo/github.svg'
import QuinCV from "../assets/common/QuinCV.pdf";

export const techStackCategory = [
  { icon: faDesktop, color: "", name: "Frontend", type: 'frontend' },
  { icon: faServer, color: "", name: "Backend", type: 'backend' },
  { icon: faDatabase, color: "", name: "Database", type: 'database' },
  { icon: faCloudArrowUp, color: "", name: "Cloud Management", type: 'cloud' },
];

//Need to refactor import dynamic svgs url
export const techStack = [
  { id: html5, name: "HTML5", type: 'frontend' },
  { id: css3, name: "CSS3", type: 'frontend' },
  { id: javascript, name: "Javascript", type: 'frontend' },
  { id: reactjs, name: "ReactJS", type: 'frontend' },
  { id: nextjs, name: "NextJS", type: 'frontend' },
  { id: vue, name: "VueJS", type: 'frontend' },
  { id: tailwindcss, name: "TailwindCSS", type: 'frontend' },
  { id: scss2, name: "SCSS", type: 'frontend' },
  { id: nodejs, name: "NodeJS", type: 'backend' },
  { id: python, name: "Python", type: 'backend' },
  { id: postgresql, name: "PostgreSQL", type: 'database' },
  { id: aws, name: "AWS", type: 'cloud' },
  { id: docker, name: "Docker", type: 'cloud' },
  { id: kubernetes, name: "Kubernetes", type: 'cloud' },
  { id: github, name: "Github", type: 'cloud' },
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

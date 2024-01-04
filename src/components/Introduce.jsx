import logo from "../assets/introduce.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSquarePhoneFlip } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faHtml5, faCss3Alt, faJs, faReact, faVuejs, faSass, faNodeJs, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Introduce() {
  const techStackData= [
    { icon: faHtml5, color: '#e74f0d'},
    { icon: faCss3Alt, color: '#185ed8'},
    { icon: faJs, color: '#e6ea1a'},
    { icon: faReact, color: '#417ce1'},
    { icon: faVuejs, color: '#3ba027'},
    { icon: faSass, color: '#db7b89'},
    { icon: faNodeJs, color: '#5ebe5b'}
  ]
  const socialLinksData = [
    { icon: faLinkedin, color: '#397aea'},
    { icon: faGithub, color: ''},
    { icon: faEnvelope, color: '#ea1f1f'},
    { icon: faSquarePhoneFlip, color: ''}
  ]
  return (
    <div className="w-fit mx-auto flex mt-16">
        <div className="mr-8">
          <div className="text-5xl font-bold">
            Front-End Developer
          </div>
          <div className="text-lg text-slate-500 my-16">
            <span>Hi, I am Quynh Le. A passionate Front-end Developer based in </span>
            <span className="font-semibold text-slate-600">
                Ho Chi Minh, Vietnam 
                <FontAwesomeIcon icon={faLocationDot} size="lg" className="ml-1" />
            </span>
          </div>
          <div className="flex gap-4 items-center font-bold mt-12">
            <span className="border-r-2 border-slate-600 pr-3 py-1">Social links</span>
            {socialLinksData.map((item, index) => (
              <FontAwesomeIcon key={index} icon={item.icon} style={{color: item.color}} size="2xl"/>
            ))}
          </div>
          <div className="flex gap-4 items-center font-bold mt-10">
            <span className="border-r-2 border-slate-600 pr-4 py-1">Tech stack</span>
            {techStackData.map((item, index) => (
              <FontAwesomeIcon key={index} icon={item.icon} style={{color: item.color}} size="2xl"/>
            ))}
          </div>
        </div>
        <div className="w-96">
            <img className="" src={logo} alt='Introduce image' />
        </div>
    </div>
  )
}

export default Introduce
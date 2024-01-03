import logo from "../assets/introduce.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3Alt, faJs, faReact, faVuejs, faSass, faNodeJs } from '@fortawesome/free-brands-svg-icons'

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
  return (
    <div className="w-fit mx-auto flex mt-10">
        <div className="mr-8">
          <div className="text-5xl font-bold">Frontend Developer</div>
          <div className="flex my-4 font-semibold">
              <FontAwesomeIcon icon={faLocationDot} style={{color: "#641507",}} size="lg" className="mr-1" />
              Ho Chi Minh, Vietnam 
          </div>
          <div className="w-96 text-lg text-slate-500">I am a highly motivated and dedicated Frontend developer with a Bachelor Degree in Computer Science and 2 years of professional experience. Known for my attention to detail, creativity, and problem-solving abilities, I strive to create visually stunning and user-friendly web applications.</div>
          <div className="flex gap-4 items-center font-bold mt-20">
            <span>Tech stack</span>
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
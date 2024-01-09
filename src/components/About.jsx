import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePhoneFlip,  } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faHtml5, faCss3Alt, faJs, faReact, faVuejs, faSass, faNodeJs, faGithub, faLinkedinIn, faPython } from '@fortawesome/free-brands-svg-icons'
import project9 from '../assets/project-9.jpg'

function About() {
    const techStackData= [
    { icon: faHtml5, color: '', name: 'HTML5'},
    { icon: faCss3Alt, color: '', name: 'CSS3'},
    { icon: faJs, color: '', name: 'Javascript'},
    { icon: faReact, color: '', name: 'ReactJs'},
    { icon: faVuejs, color: '', name: 'VueJs'},
    { icon: faSass, color: '', name: 'Sass'},
    { icon: faNodeJs, color: '', name: 'NodeJs'},
    { icon: faPython, color: '', name: 'Python'}
  ]
  const socialLinksData = [
    { icon: faLinkedinIn, color: '', link: 'https://www.linkedin.com/in/qu%E1%BB%B3nh-l%C3%AA-b7008324a/',  name: 'linkedin.com/quỳnh-lê'},
    { icon: faGithub, color: '', link: 'https://github.com/daquynh2403', name: 'github.com/daquynh2403'},
    { icon: faEnvelope, color: '', link: 'daquynh2403@gmail.com', name: 'daquynh2403@gmail.com'},
    { icon: faSquarePhoneFlip, color: '', link: '+84 865781317 (Mobile)', name: '+84 865 781 317 (Mobile)'}
  ]
  return (
    <div className='flex'>
        <div className='w-1/2 mx-auto'>
            <div className='text-5xl font-extralight text-slate-700 tracking-wide border-l-4 border-slate-200 px-3 pb-3'>About <span className='font-bold'>me</span></div>
            <div className="mt-5 font-extralight tracking-wide">
                <div className="break-words text-xl text-slate-900">
                    I am a highly motivated and dedicated front-end developer with a Bachelor Degree in Computer Science and 2 years of professional experience. Known for my attention to detail, creativity, and problem-solving abilities, I strive to create visually stunning and user-friendly web applications.
                </div>
                <div className="mt-10 grid grid-cols-2 gap-2 border-l-2 border-slate-500 pb-2 w-[40rem]">
                    {socialLinksData.map((item, index) => (
                        <div key={index} className="mt-3">
                            <FontAwesomeIcon key={index} icon={item.icon} style={{ color: item.color }} size="xl" className="w-10" />
                            <a href={item.link} target='_blank' className="p-1 font-light hover:bg-slate-800 hover:text-white transition-all duration-500" rel="noreferrer">{item.name}</a>
                        </div>
                    ))}
                </div>
            </div>
            <div className='text-2xl font-extralight text-slate-700 tracking-wide border-l-2 border-slate-500 p-2 mt-10'>Tech <span className='font-bold'>stack</span></div>
            <div className="grid grid-cols-4 text-center divide-y divide-x divide-solid text-slate-600 w-[45rem] mt-4">
                {techStackData.map((item, index) => (
                    <div className='py-4' key={index}>
                        <FontAwesomeIcon icon={item.icon} style={{ color: item.color }} size="2xl" className='h-20  hover:text-slate-800 transition-all duration-300' />
                        <div className='text-center font-light'>{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
        <div className='w-2/5 flex justify-center items-center'>
            <img src={project9} className='w-[30rem] h-full object-cover'/>
        </div>
    </div>
  )
}

export default About
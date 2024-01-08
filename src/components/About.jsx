import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePhoneFlip,  } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faHtml5, faCss3Alt, faJs, faReact, faVuejs, faSass, faNodeJs, faGithub, faLinkedinIn, faPython } from '@fortawesome/free-brands-svg-icons'

function About() {
    const techStackData= [
    { icon: faHtml5, color: '#e74f0d', name: 'HTML5'},
    { icon: faCss3Alt, color: '#185ed8', name: 'CSS3'},
    { icon: faJs, color: '#e6ea1a', name: 'Javascript'},
    { icon: faReact, color: '#417ce1', name: 'ReactJs'},
    { icon: faVuejs, color: '#3ba027', name: 'VueJs'},
    { icon: faSass, color: '#db7b89', name: 'Sass'},
    { icon: faNodeJs, color: '#5ebe5b', name: 'NodeJs'},
    { icon: faPython, color: '', name: 'Python'}
  ]
  const socialLinksData = [
    { icon: faLinkedinIn, color: '', link: 'https://www.linkedin.com/in/qu%E1%BB%B3nh-l%C3%AA-b7008324a/',  name: 'linkedin.com/quỳnh-lê'},
    { icon: faGithub, color: '', link: 'https://github.com/daquynh2403', name: 'github.com/daquynh2403'},
    { icon: faEnvelope, color: '', link: 'daquynh2403@gmail.com', name: 'daquynh2403@gmail.com'},
    { icon: faSquarePhoneFlip, color: '', link: '+84 865781317 (Mobile)', name: '+84 865 781 317 (Mobile)'}
  ]
  return (
    <div className='w-2/3 mx-auto'>
      <div className='text-5xl font-extralight text-slate-700 tracking-wide border-l-4 border-slate-200 px-3 pb-3'>About <span className='font-bold'>me</span></div>
      <div className="mt-4">
          <div className="break-words text-xl font-extralight tracking-wide">
            I am a highly motivated and dedicated front-end developer with a Bachelor Degree in Computer Science and 2 years of professional experience. Known for my attention to detail, creativity, and problem-solving abilities, I strive to create visually stunning and user-friendly web applications.
          </div>
          <div className="mt-10 font-normal text-slate-900 flex gap-5">
            {socialLinksData.map((item, index) => (
              <div key={index} className="mt-3">
                <FontAwesomeIcon key={index} icon={item.icon} style={{color: item.color}} size="xl" className="w-10"/>
                <a href={item.link} target='_blank' className="bg-slate-100 rounded px-2 py-1 font-semibold text-slate-600 hover:bg-slate-600 hover:text-white transition-all duration-500  " rel="noreferrer">{item.name}</a>
              </div>
            ))}
          </div>
      </div>
      <div className="grid grid-cols-8 mt-20 text-center">
        {techStackData.map((item, index) => (
            <div className='hover:bg-slate-800 hover:text-white p-1 transition-all duration-500' key={index}>
              <FontAwesomeIcon icon={item.icon} style={{ color: item.color }} size="2xl" className='h-20' />
              <div className='text-center font-medium'>{item.name}</div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default About
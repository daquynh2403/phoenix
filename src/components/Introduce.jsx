import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSquarePhoneFlip,  } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faHtml5, faCss3Alt, faJs, faReact, faVuejs, faSass, faNodeJs, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

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
    { icon: faLinkedinIn, color: '', link: 'daquynh2403@gmail.com'},
    { icon: faGithub, color: '', link: 'daquynh2403@gmail.com'},
    { icon: faEnvelope, color: '', link: 'daquynh2403@gmail.com'},
    { icon: faSquarePhoneFlip, color: '', link: 'daquynh2403@gmail.com'}
  ]
  return (
    <div className="w-fit mx-auto flex mt-16">
        <div className="mr-8">
          <span className="text-5xl font-normal text-slate-700 mr-4 underline decoration-1 underline-offset-8">
            Front-End
          </span>
          <span className="text-5xl font-bold">
            Developer
          </span>
          <div className="text-lg text-slate-500 mt-10">
            <span>Hi, I am Quynh Le. A passionate Front-end Developer based in </span>
            <span className="font-semibold text-slate-600">
                Ho Chi Minh, Vietnam 
                <FontAwesomeIcon icon={faLocationDot} size="lg" className="ml-1" />
            </span>
          </div>
          <div className="p-4 border-4 border-double border-slate-200 rounded-lg mt-4">
            <div className="w-[40rem] break-words text-xl font-thin text-slate-900">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus magni itaque aut explicabo aspernatur eius natus beatae voluptatem veritatis odio, quisquam hic voluptates cumque sit atque architecto expedita vel soluta.
            </div>
            <div className="mt-10 font-normal text-slate-700">
              {socialLinksData.map((item, index) => (
                <div key={index} className="mt-3">
                  <FontAwesomeIcon key={index} icon={item.icon} style={{color: item.color}} size="2xl" className="w-10 mr-2"/>
                  <a href="#" className="">{item.link}</a>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-4 items-center font-bold mt-10">
            <span className="border-r-2 border-slate-600 pr-4 py-1">Tech stack</span>
            {techStackData.map((item, index) => (
              <FontAwesomeIcon key={index} icon={item.icon} style={{color: item.color}} size="2xl"/>
            ))}
          </div>
        </div>
        <div className="w-96">
            <img className="" src="" alt='Introduce image' />
        </div>
    </div>
  )
}

export default Introduce
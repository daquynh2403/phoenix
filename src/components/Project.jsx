import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { string } from 'prop-types';

function Project({ imgSrc }) {
  return (
    <div className='w-full flex justify-center gap-40 h-96'>
      <div className="p-4 hidden">
        <span className="text-5xl text-slate-700 font-thin underline">
          Lunari
        </span>
        <span className="text-5xl text-slate-900 font-bold">
          Market
        </span>
        <div className="flex ">S
          <FontAwesomeIcon icon={faGithub} size='xl'/>
          <span className='text-slate-900 text-xl mr-2 hover:underline transition duration-700 ease-in-out'>Live Demo</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='xl'/>
        </div>
        <div className="font-semibold text-slate-900">An E-commerce website allows users shopping online</div>
        <FontAwesomeIcon  icon={faReact} style={{color: '#417ce1'}} size="2xl"/>
      </div>
      <div className="overflow-hidden w-full" >
        <img src={imgSrc} alt='Project 1' className='w-full h-full transition duration-700 ease-in-out hover:opacity-85 hover:scale-125 object-cover'/>
      </div>
    </div>
  )
}

Project.propTypes = {
  imgSrc: string
}

export default Project
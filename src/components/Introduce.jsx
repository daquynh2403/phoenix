import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Introduce() {
  
  return (
    <div className="relative left-1/2 t-4 mx-auto flex mt-32">
        <div className="py-2">
          <div className="text-7xl font-extralight text-slate-700 tracking-wide">
            Front-End
          </div>
          <div className="text-7xl font-bold text-slate-800 tracking-wide mt-3">
            Developer
          </div>
          <div className='mt-4 h-px bg-slate-500 w-24'></div>
          <div className="text-2xl font-light text-slate-500 mt-10 leading-10">
            <span>Hi, I am <span className='font-normal text-slate-700'>Quynh Le</span>. A passionate Front-end Developer based in </span>
            <span className="font-normal text-slate-700">
                Ho Chi Minh, Vietnam 
                <FontAwesomeIcon icon={faLocationDot} size="lg" className="ml-1" />
            </span>
          </div>
          
        </div>
    </div>
  )
}

export default Introduce
import project4 from '../assets/project-4.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'

function Footer() {
  return (
    <div className="bg-slate-100 h-fit py-10">
      <div className='w-2/3 mx-auto flex mb-10'>
        <div className='text-lg font-thin tracking-wide'>
          <img src={project4} className='w-28 h-28 object-cover rounded-full object-right' />
          <div className='mt-8'>Ho Chi Minh City, Vietnam</div>
          <div className='mt-2'>daquynh2403@gmail.com</div>
          <div className='mt-2'>+84 865 781 317</div>
        </div>
        <div className='w-1/3 mx-auto'>
          <div className='text-lg font-semibold tracking-wider'>RATE MY WEBSITE FOR IMPROVEMENT</div>
          <div className='mt-3'>
            <label className='text-base font-extralight p-2'>Name</label>
            <input placeholder='Empty for Anonymous' className='font-thin block w-96 p-2 border-2 rounded-lg' />
          </div>
          <div className='my-4 text-2xl'>
            <FontAwesomeIcon icon={faStar} className='hover:text-slate-600' />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className='mt-3'>
            <label className='text-base font-extralight p-2'>Message</label>
            <textarea placeholder='Your message' className='font-thin block w-96 p-2 border-2 rounded-lg' />
          </div>
          <div className='mt-3'>
            <button className='border border-slate-500 text-slate-700 text-base font-semibold px-3 py-1 rounded'>Send</button>
          </div>  
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
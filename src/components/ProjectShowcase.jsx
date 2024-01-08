import Project from './Project'
import project4 from '../assets/project-4.jpg'
import project5 from '../assets/project-5.jpg'
import project6 from '../assets/project-6.jpg'
import project7 from '../assets/project-7.jpg'
import project8 from '../assets/project-8.jpg'
import project9 from '../assets/project-9.jpg'

function ProjectShowcase() {
  return (
    <div className=''>
      <div className='text-slate-700 font-normal text-5xl border-l-2 border-slate-300 w-2/3 mx-auto pl-2 py-3'>Portfolio </div>
      <div className='flex gap-3 mx-auto w-2/3 m-5'>
        <div className='p-2 border-2 border-slate-100 rounded font-semibold text-slate-900 hover:bg-slate-900 hover:text-slate-100 transition duration-500 ease-in-out'>All</div>
        <div className='p-2 border-2 border-slate-100 rounded font-semibold text-slate-900 hover:bg-slate-900 hover:text-slate-100 transition duration-500 ease-in-out'>Fullstack</div>
        <div className='p-2 border-2 border-slate-100 rounded font-semibold text-slate-900 hover:bg-slate-900 hover:text-slate-100 transition duration-500 ease-in-out'>Frontend Only</div>
        <div className='p-2 border-2 border-slate-100 rounded font-semibold text-slate-900 hover:bg-slate-900 hover:text-slate-100 transition duration-500 ease-in-out'>UI/UX Designer</div>
      </div>
      <div className='grid grid-cols-3'>
        <Project imgSrc={project4}/>
        <div className='grid grid-cols-2'>
          <Project imgSrc={project5}/>
          <Project imgSrc={project6}/>
          <Project imgSrc={project7}/>
          <Project imgSrc={project8}/>
        </div>
        <Project imgSrc={project9}/>
      </div>
      
    </div>
    
  )
}

export default ProjectShowcase
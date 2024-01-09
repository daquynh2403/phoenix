import Project from './Project'
import project4 from '../assets/project-4.jpg'
import project5 from '../assets/project-5.jpg'
import project6 from '../assets/project-6.jpg'
import project7 from '../assets/project-7.jpg'
import project8 from '../assets/project-8.jpg'
import project9 from '../assets/project-9.jpg'

function ProjectShowcase() {
  return (
    <div className=' '>
      <div className='text-5xl font-extralight text-slate-700 tracking-wide border-l-4 border-slate-200 p-3 ml-24 mb-10'>
        Projects
        <span className='font-bold ml-3'>showcase</span> 
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <Project imgSrc={project4}/>
        <Project imgSrc={project5}/>
        <Project imgSrc={project6}/>
        <Project imgSrc={project7}/>
        <Project imgSrc={project8}/>
        <Project imgSrc={project9}/>
      </div>
    </div>
    
  )
}

export default ProjectShowcase
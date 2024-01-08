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
      <div className='w-2/3 mx-auto mb-10 text-5xl font-extralight text-slate-700 tracking-wide border-l-4 border-slate-200 px-3 pb-3'>Portfolio </div>
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
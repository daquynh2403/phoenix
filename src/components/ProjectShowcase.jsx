import Project from './Project'

function ProjectShowcase() {
  return (
    <div className=''>
      <div className='text-slate-700 font-normal text-5xl border-l-2 border-slate-300 w-2/3 mx-auto pl-2 py-3'>Portfolio </div>
      <div>
        <div>All</div>
        <div>Fullstack</div>
        <div>Frontend Only</div>
        <div>UI/UX Designer</div>
      </div>
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
    
  )
}

export default ProjectShowcase
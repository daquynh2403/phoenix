
function Header() {
  return (
    <div className="flex justify-between items-center px-20 py-7">
        <div className="font-sans font-bold text-2xl text-slate-700">Quin.dev</div>
        <ul className="flex font-extralight gap-6 tracking-wider leading-4">
            <li className="underline underline-offset-8 decoration-2">Home</li>
            <li>About me</li>
            <li>Portfolio</li>
            <li>Experience</li>
            <li>Education</li>
        </ul>
    </div>
  )
}

export default Header
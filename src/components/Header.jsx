
function Header() {
  return (
    <div className="flex justify-between items-center px-20 py-7">
        <div className="font-sans font-bold text-2xl text-slate-700">Quin.dev</div>
        <ul className="flex font-extralight gap-6 tracking-wider leading-4">
            <li className="underline underline-offset-8 decoration-2">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About me</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
        </ul>
    </div>
  )
}

export default Header
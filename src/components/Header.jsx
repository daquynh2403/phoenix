import { useEffect, useState } from "react"

function Header() {
  const [headerStyle, setHeaderStyle] = useState('h-24 text-slate-700')
  const shrinkedHeader = () => {
    if(window.scrollY > 0) setHeaderStyle('h-14 bg-slate-800 text-slate-100')
    else setHeaderStyle('h-24')
  }
  useEffect(() => {
    window.addEventListener('scroll', shrinkedHeader)
  },[])
  return (
    <div className={`flex justify-between items-center px-20 fixed w-full ${headerStyle} transition-all duration-500 z-40`}>
      <div className="font-sans font-bold text-2xl">Quin.dev</div>
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
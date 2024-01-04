
function Header() {
  return (
    <div className="flex justify-between items-center px-20 py-5">
        <div className="font-sans font-bold text-2xl">Quin.dev</div>
        <ul className="flex font-bold gap-6">
            <li>About</li>
            <li>Portfolio</li>
            <li>Experience</li>
            <li>Education</li>
            <li>Rate</li>
        </ul>
    </div>
  )
}

export default Header
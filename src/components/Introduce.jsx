import logo from "../assets/introduce.jpg"

function Introduce() {
  return (
    <div className="w-fit mx-auto flex mt-10">
        <div className="w-96">
            <div className="text-5xl font-bold">Frontend Developer</div>
            <div className="flex">
                <i className="fa-solid fa-location-dot">HCM, VietNam</i>
            </div>
            <div className="text-gray">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero cum inventore adipisci! Ducimus commodi corporis accusantium pariatur dignissimos dolor. Ut facere aperiam unde possimus culpa inventore aut laudantium! Sunt, magni?</div>
        </div>
        <div className="w-96">
            <img className="" src={logo} alt='Introduce image' />
        </div>
    </div>
  )
}

export default Introduce
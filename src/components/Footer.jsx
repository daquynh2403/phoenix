import project4 from "../assets/project-4.jpg";
import RateForm from "./RateForm";

function Footer() {
  return (
    <div className="bg-slate-100 h-fit py-10">
      <div className="w-2/3 mx-auto flex mb-10 max-md:w-full max-md:block max-md:ml-10">
        <div className="text-lg font-thin tracking-wide">
          <img
            src={project4}
            className="w-28 h-28 object-cover rounded-full object-right"
          />
          <div className="mt-8">Ho Chi Minh City, Vietnam</div>
          <div className="mt-2">daquynh2403@gmail.com</div>
          <div className="mt-2">+84 865 781 317</div>
          <div className="mt-2">&copy; 2023 by Quin Le</div>
        </div>
        <RateForm />
      </div>
    </div>
  );
}

export default Footer;

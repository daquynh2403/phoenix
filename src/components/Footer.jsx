import project1 from "../assets/projects/project-1.jpg";
import RateForm from "./common/RateForm";

function Footer() {
  return (
    <div className="bg-slate-100 h-fit py-10 max-lg:pl-10 max-md:py-2">
      <div className="w-2/3 mx-auto flex mb-2 max-lg:w-full max-md:block">
        <div className="text-lg font-thin tracking-wide max-md:text-base">
          <img
            src={project1}
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

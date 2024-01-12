import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faStar,
  faKeyboard,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";

function Education() {
  return (
    <div className="flex z-20 relative py-28">
      <div className="w-1/3 ml-24 mb-10">
        <div className="text-5xl font-thin text-white tracking-wide border-l-4 border-slate-700 p-3">
          Education
        </div>
      </div>
      <div className="grid grid-rows-2 grid-cols-2 w-full gap-20 font-extralight text-slate-200 tracking-wide">
        <div className="flex">
          <FontAwesomeIcon
            icon={faKeyboard}
            className="text-5xl self-center p-3"
          />
          <div className="ml-3 text-xl tracking-wider leading-5 font-semibold">
            BACHELOR OF SCIENCE (BS)
            <div className="text-xl font-thin mt-2">Computer Science</div>
            <div className="text-xl font-thin">GPA: 3.5</div>
          </div>
        </div>
        <div className="flex">
          <FontAwesomeIcon icon={faStar} className="text-5xl self-center p-3" />
          <div className="ml-3 text-xl tracking-wider leading-5 font-semibold">
            CERTIFICATE
            <div className="text-xl font-thin mt-2">Lorem dipsum</div>
            <div className="text-xl font-thin">Lorem dipsum</div>
          </div>
        </div>
        <div className="flex">
          <FontAwesomeIcon
            icon={faComments}
            className="text-5xl self-center p-3"
          />
          <div className="ml-3 text-xl tracking-wider leading-5 font-semibold">
            LANGUAGE
            <div className="text-xl font-thin mt-2">English (IELTS 6.5)</div>
            <div className="text-xl font-thin">Chinese (HSK5)</div>
          </div>
        </div>
        <div className="flex">
          <FontAwesomeIcon
            icon={faBookmark}
            className="text-5xl self-center py-3 px-6"
          />
          <div className="ml-3 text-xl tracking-wider leading-5 font-semibold">
            BOOK
            <div className="text-xl font-thin mt-2">Lorem dipsum</div>
            <div className="text-xl font-thin">Lorem dipsum</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;

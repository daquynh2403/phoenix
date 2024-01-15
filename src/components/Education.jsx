import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faStar,
  faKeyboard,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";

function Education() {
  return (
    <div className="flex z-20 relative py-28 max-md:block max-md:py-2">
      <div className="w-1/3 ml-24 mb-10 max-lg:ml-8 max-md:w-full max-md:text-center max-md:m-0">
        <div className="text-5xl font-thin text-white tracking-wide border-l-4 border-slate-700 p-3 max-lg:text-4xl max-md:border-0 max-md:pb-2">
          Education
        </div>
      </div>
      <div className="grid grid-rows-2 grid-cols-2 w-full gap-20 font-extralight text-slate-200 tracking-wide max-md:block max-lg:gap-10">
        <div className="flex max-md:mb-6 max-md:w-full max-md:block max-md:text-center">
          <FontAwesomeIcon
            icon={faKeyboard}
            className="text-5xl self-center p-3 max-lg:text-4xl"
          />
          <div className="ml-3 text-xl tracking-wider leading-5 font-semibold max-lg:text-base max-md:ml-0">
            BACHELOR OF SCIENCE (BS)
            <div className="font-thin mt-2">Computer Science</div>
            <div className="font-thin">GPA: 3.5</div>
          </div>
        </div>
        <div className="flex max-md:mb-6 max-md:w-full max-md:block max-md:text-center">
          <FontAwesomeIcon
            icon={faStar}
            className="text-5xl self-center p-3 max-lg:text-4xl"
          />
          <div className="ml-3 text-xl tracking-wider leading-5 font-semibold max-lg:text-base max-md:ml-0">
            CERTIFICATE
            <div className="font-thin mt-2">Lorem dipsum</div>
            <div className="font-thin">Lorem dipsum</div>
          </div>
        </div>
        <div className="flex max-md:mb-6 max-md:w-full max-md:block max-md:text-center">
          <FontAwesomeIcon
            icon={faComments}
            className="text-5xl self-center p-3 max-lg:text-4xl"
          />
          <div className="ml-3 text-xl tracking-wider leading-5 font-semibold max-lg:text-base max-md:ml-0">
            LANGUAGE
            <div className="font-thin mt-2">English (IELTS 6.5)</div>
            <div className="font-thin">Chinese (HSK5)</div>
          </div>
        </div>
        <div className="flex max-md:mb-6 max-md:w-full max-md:block max-md:text-center">
          <FontAwesomeIcon
            icon={faBookmark}
            className="text-5xl self-center py-3 px-6 max-lg:text-4xl"
          />
          <div className="ml-3 text-xl tracking-wider leading-5 font-semibold max-lg:text-base max-md:ml-0">
            BOOK
            <div className="font-thin mt-2">Lorem dipsum</div>
            <div className="font-thin">Lorem dipsum</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;

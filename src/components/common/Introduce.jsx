import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { number, object } from "prop-types";
import { useElementOnScreen } from "../../hooks/useElementOnScreen";

function Introduce({ id, current, slide, options }) {
  const [headingRef, headingVisible] = useElementOnScreen(options);
  return (
    <div
      id={id}
      className="transition-all duration-700 ease-in-out flex-none w-full h-full"
      style={{ transform: `translateX(-${current * 100}%)` }}
    >
      <img src={slide.img} className="w-full h-full" loading="lazy" />
      <div className="absolute top-52 left-[64rem] max-2xl:left-1/2 max-lg:bg-slate-200/80 max-lg:left-0 max-lg:top-1/3 max-lg:w-full max-lg:text-center max-lg:py-10">
        <div
          ref={headingRef}
          className={`${
            headingVisible
              ? "animate-[slideUp_2s_ease-in-out] visible"
              : "invisible"
          } text-7xl font-extralight text-slate-700 tracking-wide max-lg:text-5xl max-sm:text-2xl`}
        >
          {slide.heading}
        </div>
        <div
          className={`${
            headingVisible
              ? "animate-[slideUp_3s_ease-in-out_1] visible"
              : "invisible"
          } text-7xl font-bold text-slate-800 tracking-wide mt-3 max-lg:text-5xl max-sm:text-3xl`}
        >
          {slide.subheading}
        </div>
        <div
          className={`${
            headingVisible
              ? "animate-[slideUp_3s_ease-in-out_1] visible"
              : "invisible"
          } mt-4 h-px bg-slate-500 w-24 max-lg:mx-auto`}
        ></div>
        <div
          className={`${
            headingVisible ? "animate-[slideUp_4s_ease-in-out_1] visible" : ""
          } text-xl font-extralight text-slate-500 mt-4 leading-10 max-xl:w-[30rem] max-lg:text-center max-lg:w-full max-sm:text-base max-2xl:w-[50rem]`}
        >
          <span>
            {slide.desc.partOne}
            <span className="font-normal text-slate-700">
              {slide.desc.partTwo}
            </span>
            {slide.desc.partThree}
          </span>
          <span className="font-normal text-slate-700">
            {slide.desc.partFour}
            {slide.useIcon ? (
              <FontAwesomeIcon
                icon={faLocationDot}
                size="lg"
                className="ml-1"
              />
            ) : (
              <></>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

Introduce.propTypes = {
  id: number,
  current: number,
  slide: object,
  options: object,
};

export default Introduce;

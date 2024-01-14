import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { number } from "prop-types";
import { contentData } from "../data/introduceData";

function Introduce() {
  const contentRef = useRef(null);

  return (
    <div className="absolute flex left-1/2 top-1/4 w-full z-50">
      {contentData.map((content, index) => (
        <div
          key={index}
          style={{ transform: `translateX(${index * 270}%)` }}
          ref={contentRef}
        >
          <div className="text-7xl font-extralight text-slate-700 tracking-wide contentBanner">
            {content.heading}
          </div>
          <div className="text-7xl font-bold text-slate-800 tracking-wide mt-3 contentBanner">
            {content.subheading}
          </div>
          <div className="mt-4 h-px bg-slate-500 w-24"></div>
          <div className="text-2xl font-extralight text-slate-500 mt-10 leading-10 contentBanner">
            <span>
              {content.desc.partOne}
              <span className="font-normal text-slate-700">
                {content.desc.partTwo}
              </span>
              {content.desc.partThree}
            </span>
            <span className="font-normal text-slate-700">
              {content.desc.partFour}
              {content.useIcon ? (
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
      ))}
    </div>
  );
}

Introduce.propTypes = {
  current: number,
};

export default Introduce;

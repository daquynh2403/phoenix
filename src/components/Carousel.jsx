import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { array } from "prop-types";

function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const prevSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };
  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1)),
      7000
    );
    return () => {
      resetTimeout();
    };
  }, [current, slides.length]);
  return (
    <div className="h-screen overflow-hidden">
      <div
        className="flex transition-all duration-700 ease-in-out relative"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <React.Fragment key={index}>
            <div
              className="absolute top-1/4 left-1/2"
              style={{ transform: `translateX(${index * 400}%)` }}
            >
              <div className="text-7xl font-extralight text-slate-700 tracking-wide">
                {slide.heading}
              </div>
              <div className="text-7xl font-bold text-slate-800 tracking-wide mt-3">
                {slide.subheading}
              </div>
              <div className="mt-4 h-px bg-slate-500 w-24"></div>
              <div className="text-2xl font-extralight text-slate-500 mt-10 leading-10">
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
            <img src={slide.img} className="w-full" loading="lazy" />
          </React.Fragment>
        ))}
      </div>
      <div className="flex w-full h-full justify-between text-slate-200 text-2xl absolute top-0">
        <button onClick={prevSlide}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="bg-slate-800/50 px-2 py-8"
          />
        </button>
        <button onClick={nextSlide}>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="bg-slate-800/50 px-2 py-8"
          />
        </button>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  slides: array,
};

export default Carousel;

import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { array } from 'prop-types'
import Introduce from "./Introduce"

function Carousel({ slides }) {
    const [current, setCurrent] = useState(0)
    const timeoutRef = useRef(null)
    const prevSlide = () => {
        if (current === 0) setCurrent(slides.length - 1)
        else setCurrent(current - 1)
    }
    const nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0)
        else setCurrent(current + 1)
    }
    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }
    useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout(() => setCurrent((prev) => prev === slides.length - 1 ? 0 : prev + 1) , 7000)
        return () => {
            resetTimeout()
        }
    }, [current, slides.length])
  return (
    <div className='relative h-screen overflow-hidden'>
        <div className='flex transition-all duration-700 ease-in-out' style={{ transform: `translateX(-${current * 100}%)`}}>
            <Introduce />
            {slides.map((slide, index) => (
                <img src={slide} key={index} className='w-full' loading='lazy'/>
            ))}
        </div>
        <div className='flex w-full h-full justify-between text-slate-200 text-2xl absolute top-0'>
            <button onClick={prevSlide}>
                <FontAwesomeIcon icon={faChevronLeft} className='bg-slate-800/50 px-2 py-8' />
            </button>
            <button onClick={nextSlide}>
                <FontAwesomeIcon icon={faChevronRight} className='bg-slate-800/50 px-2 py-8'/>
            </button>
        </div>
    </div>
  )
}

Carousel.propTypes = {
    slides: array
}

export default Carousel
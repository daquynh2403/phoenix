import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { array } from 'prop-types'
import Introduce from "./Introduce"

function Carousel({ slides }) {
    const [current, setCurrent] = useState(0)
    const prevSlide = () => {
        if (current === 0) return
        else setCurrent(current - 1)
    }
    const nextSlide = () => {
        if (current === slides.length - 1) return
        else setCurrent(current + 1)
    }
  return (
    <div className='relative h-screen overflow-hidden'>
        <div className='flex transition-all duration-500' style={{ transform: `translateX(-${current * 100}%)`}}>
            <Introduce />
            {slides.map((slide, index) => (
                <img src={slide} key={index} className='w-full' />
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
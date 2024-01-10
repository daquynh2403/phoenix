import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react'
import { number } from 'prop-types'

function Introduce() {
  const contentRef = useRef(null)
  const [isIntersecting, setIsIntersecting] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(entry => {
      // const content = entry.target.querySelectorAll('.contentBanner')
      setIsIntersecting(entry[0].isIntersecting)
      console.log(entry[0]);
    })
    observer.observe(contentRef.current)
    return () => observer.disconnect()
  },[])
  
  useEffect(() => {
    if (isIntersecting) {
      contentRef.current.querySelectorAll('.contentBanner').forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('animate-showUp')
        }, index * 100)
      })
    } else {
      contentRef.current.querySelectorAll('.contentBanner').forEach((el, index) => {
        setTimeout(() => {
          el.classList.remove('animate-showUp')
        }, index * 100)
      })
    }
  },[isIntersecting])

  const contentData = [
    {
      heading: 'Front-End',
      subheading: 'Developer',
      desc: {
        partOne: 'Hi, I am ',
        partTwo: 'Quynh Le',
        partThree: '. A passionate Front-end Developer based in ',
        partFour: 'Ho Chi Minh, Vietnam'
      },
      useIcon: true
    },
    {
      heading: 'WORKING',
      subheading: 'ANYWHERE',
      desc: {
        partOne: 'My ',
        partTwo: 'passion ',
        partThree: 'guide me',
        partFour: ''
      },
      useIcon: false
    },
    {
      heading: 'LEARNING',
      subheading: 'EVERYWHERE',
      desc: {
        partOne: '',
        partTwo: '',
        partThree: '',
        partFour: ''
      },
      useIcon: false
    }
  ]
  
  
  return (
    <div className="absolute flex left-1/2 top-1/4 w-full z-50" ref={contentRef}>
      {contentData.map((content, index) => (
        <div key={index} style={{ transform: `translateX(${index * 270}%)`}}>
          <div className="text-7xl font-extralight text-slate-700 tracking-wide contentBanner">
            {content.heading}
          </div>
          <div className="text-7xl font-bold text-slate-800 tracking-wide mt-3 contentBanner">
            {content.subheading}
          </div>
          <div className='mt-4 h-px bg-slate-500 w-24'></div>
          <div className="text-2xl font-extralight text-slate-500 mt-10 leading-10 contentBanner">
            <span>{content.desc.partOne}<span className='font-normal text-slate-700'>{content.desc.partTwo}</span>{content.desc.partThree}</span>
            <span className="font-normal text-slate-700">
                {content.desc.partFour}
                {content.useIcon ? <FontAwesomeIcon icon={faLocationDot} size="lg" className="ml-1" /> : <></>}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

Introduce.propTypes = {
  current: number
}

export default Introduce
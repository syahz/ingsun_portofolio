import { useLayoutEffect } from 'react'
import './PreLoader.css'
import gsap from 'gsap'

const PreLoader = () => {
  useLayoutEffect(() => {
    const titles = ['Developer', 'Lorem Ipsum Generator Expert', 'Meow-ster of Finding Bugs I Created.']

    const elements = document.querySelectorAll('.texts-container span')
    gsap.set(elements, { opacity: 0, y: -50 })

    const tl = gsap.timeline()

    titles.forEach((title) => {
      tl.fromTo(
        elements,
        { opacity: 0, y: 0, ease: 'power3.in', duration: 1.2 },
        {
          onStart: () => {
            elements[0].innerHTML = title
          },
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power4.inOut',
          delay: 0.8
        }
      ).to(elements, {
        opacity: 0,
        y: -50,
        duration: 2,
        ease: 'power3.inOut'
      })
    })

    tl.to(
      '.loader',
      {
        yPercent: -100,
        ease: 'Power3.easeOut'
      },
      '+=0.9'
    )
  }, [])

  return (
    <div className='loader' id='intro-loader'>
      <div className='texts-container'>
        <p>I AM</p>
        <span className='title-1'>Developer</span>
      </div>
    </div>
  )
}

export default PreLoader

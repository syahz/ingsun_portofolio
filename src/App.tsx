import './App.css'
import Lenis from 'lenis'
import Contact from './components/Contact/Contact'
import { Leva } from 'leva'
import SectionHead from './components/Head/SectionHead'
import { useEffect } from 'react'
import SectionAbout from './components/About/SectionAbout'
import SectionSkills from './components/Skills/SectionSkills'
import SectionProjects from './components/Projects/SectionProjects'
import HeadSeparator from './components/HeadSeparator/HeadSeparator'
import SectionMiniProjects from './components/MiniProjects/SectionMiniProjects'
import PreLoader from './components/PreLoader/PreLoader'

function App() {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <PreLoader />
      <Leva hidden />
      <div className='container'>
        <SectionHead />
        <HeadSeparator />
        <SectionAbout />
        <SectionSkills />
        <SectionProjects />
        <SectionMiniProjects />
      </div>
      <Contact />
    </main>
  )
}

export default App

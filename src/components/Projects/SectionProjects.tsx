import { useState } from 'react'
import Separator from '../Separator/Separator'
import Project from './Project'
import './SectionProjects.css'
import Modal from './Modal'

const ListProjects = [
  {
    url: 'https://mybk.my.id',
    title: 'MY-BK',
    description: 'ExpressJS NextJS Puppeteer',
    src: 'mybk.png',
    color: '#ebebeb'
  },
  {
    url: 'https://github.com/syahz/Himmaba',
    title: 'HIMMABA',
    description: 'Laravel Bootstrap JQuery',
    src: 'himmaba.png',
    color: '#ebebeb'
  },
  {
    url: 'https://www.sijimat.ptspkotamalang.net/',
    title: 'SIJIMAT',
    description: 'Codeigniter Bootstrap JQuery',
    src: 'sijimat.png',
    color: '#ebebeb'
  },
  {
    url: 'https://lphub.ub.ac.id/',
    title: 'LPH UB',
    description: 'Laravel Inertia Tailwind',
    src: 'lphub.png',
    color: '#ebebeb'
  }
]

const SectionProjects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 })
  return (
    <section className='projects'>
      <h2>Projects</h2>
      <div className='list-projects'>
        <Separator />
        {ListProjects.map((project, index) => (
          <a href={project.url} style={{ textDecoration: 'none', color: 'inherit' }} target='blank_'>
            <Project index={index} key={index} title={project.title} setModal={setModal} description={project.description} />
          </a>
        ))}
      </div>
      <Modal modal={modal} projects={ListProjects} />
    </section>
  )
}

export default SectionProjects

import { useState } from 'react'
import Modal from '../Projects/Modal'
import Project from '../Projects/Project'
import Separator from '../Separator/Separator'

const SectionMiniProjects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 })
  const ListProjects = [
    {
      url: 'https://github.com/syahz/Neu',
      title: 'Chat-App',
      description: 'ExpressJS NextJS Socket.io',
      src: 'chat-app.png',
      color: '#1a1717'
    }
  ]

  return (
    <section className='projects'>
      <h2>Mini Project</h2>
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

export default SectionMiniProjects

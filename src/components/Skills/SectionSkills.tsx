import './SectionSkills.css'
const SectionSkills = () => {
  const skills = [
    {
      name: 'NextJS',
      icon: '/img/next.svg'
    },
    {
      name: 'JWT',
      icon: '/img/jwt.svg'
    },
    {
      name: 'ExpressJS',
      icon: '/img/express.svg'
    },
    {
      name: 'Figma',
      icon: '/img/figma.svg'
    },
    {
      name: 'Prisma',
      icon: '/img/prisma.svg'
    },
    {
      name: 'Laravel',
      icon: '/img/laravel.svg'
    },
    {
      name: 'TailwindCSS',
      icon: '/img/tailwind.svg'
    },
    {
      name: 'MySQL',
      icon: '/img/mysql.svg'
    }
  ]
  return (
    <>
      <section className='skills container'>
        <h2>Skills</h2>
        <div className='list-skills'>
          {skills.map((skill, index) => (
            <div className='skill-items' key={index}>
              <img src={skill.icon} width={27} height={27} alt={skill.name} loading='lazy' />
              <span className='img-tooltip'>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default SectionSkills

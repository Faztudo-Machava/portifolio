import { motion } from 'framer-motion';
import { Back } from '../components/BackBtn';
import { Foward } from '../components/FowardBtn';
import portifolio from '../assets/projects/portifolio.png';
import verdant from '../assets/projects/verdant.png';
import lmteacher from '../assets/projects/lmteacher.png';
import infra from '../assets/projects/infra.png';
import { Project } from '../components/Project';

const projects = {
  INFRA : {
    name: 'InfraPerfil',
    link: 'https://perfil-infractores.vercel.app/#/',
    repository: 'https://github.com/Faztudo-Machava/perfil_infractores',
    img: infra
  },
  VERDANT : {
    name: 'Verdant',
    link: 'http://verdantt.herokuapp.com/#',
    repository: 'https://github.com/Faztudo-Machava/parking_system',
    img: verdant
  },
  LMTEACHER : {
    name: 'Lmteacher',
    link: 'https://lmteacher.com',
    repository: '',
    img: lmteacher
  },
  PORTIFOLIO : {
    name: 'Portifolio',
    link: 'https://faustomachava.vercel.com',
    repository: 'https://github.com/Faztudo-Machava/portifolio',
    img: portifolio
  }
}

export function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='flex flex-col justify-center items-center md:px-28 sm:px-16 mt-4 lg:min-h-[87vh]'
    >
      <div className='my-4 flex flex-col justify-center'>
        <h1 className='text-lg text-center my-4 '>Projectos</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-6'>
          {Object.entries(projects).map(([key, item])=>{
            return(
              <Project 
                img={item.img} 
                link={item.link} 
                name={item.name} 
                repository={item.repository} 
                key={key} />
            )
          })}
        </div>
      </div>
      <Back path='/About' pathName='About' />
      <Foward path='/Contact' pathName='Contact' />
    </motion.div>
  )
}


import { motion } from 'framer-motion';
import { Back } from '../components/BackBtn';
import { Foward } from '../components/FowardBtn';

export function Projects() {
  return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='flex flex-col justify-center items-center h-[80vh]'
      >
        <h1>Projects</h1>
        <Back path='/About' pathName='About' />
        <Foward path='/Contact' pathName='Contact' />
      </motion.div>
  )
}

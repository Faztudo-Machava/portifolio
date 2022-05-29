
import { motion } from 'framer-motion';
import { Back } from '../components/BackBtn';

export function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='flex flex-col justify-center items-center h-[90vh]'
    >
      <h1>Contact</h1>
      <Back path='/Projects' pathName='Projects' />
    </motion.div>
  )
}
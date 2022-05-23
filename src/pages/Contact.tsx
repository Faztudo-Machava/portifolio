
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Contact</h1>
    </motion.div>
  )
}
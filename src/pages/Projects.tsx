
import { motion } from 'framer-motion';

export function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Projects</h1>
    </motion.div>
  )
}

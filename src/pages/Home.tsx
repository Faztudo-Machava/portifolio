import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter'

export function Home(){
    return(
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className='flex flex-col justify-center items-center h-[80vh]'
        >
            <h1 className='text-xl text-[50px]'>
                Fausto Machava
                {/* <span>
                    <Typewriter
                        words={['Fausto Machava']}
                        loop={1}
                        cursor
                        cursorStyle='|'
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span> */}
            </h1>
            <p className='mt-4 text-base font-textMeOne'>
            <span>
                    <Typewriter
                        words={['Sou Engenheiro de Software']}
                        loop={1}
                        cursor
                        cursorStyle='|'
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </p>
        </motion.div>
    );
}
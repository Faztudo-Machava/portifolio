import { motion } from 'framer-motion';
import { PaperPlaneTilt } from 'phosphor-react';
import { Typewriter } from 'react-simple-typewriter'
import { DownloadCV } from '../components/DownloadBtn';
import { Foward } from '../components/FowardBtn';

export function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='flex flex-col justify-center items-center h-[80vh]'
        >
            <p>Oi, chamo-me</p>
            <h1 className='text-xl text-[50px] mt-4'>
                Fausto Machava
            </h1>
            <p className='my-4 text-base'>
                <span>
                    <Typewriter
                        words={['Engenheiro de Software']}
                        loop={1}
                        cursor
                        cursorStyle='|'
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </p>
            <div className="flex justify-center">
                <DownloadCV />
                <button
                    className='bg-principle-300 px-6 py-2 rounded hover:bg-blue-800 hover:duration-200 hover:transition-all flex'
                >Contacte {<PaperPlaneTilt className='ml-2' size={20} weight='fill'/>} </button>
            </div>
            <Foward path='/About' pathName='About' />
        </motion.div>

    );
}
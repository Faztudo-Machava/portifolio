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
            className='flex flex-col justify-center items-center h-[90vh] max-w-full'
        >
            <p>Oi, meu nome é</p>
            <h1 className='text-3xl md:text-4xl 2xl:text-8xl mt-4 2xl:mt-10 whitespace-nowrap'>
                Fausto Machava
            </h1>
            <p className='my-4 2xl:my-10'>
                <span className='whitespace-nowrap'>
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
            <div className="flex flex-col md:flex-row justify-center gap-3">
                <DownloadCV />
                <a href='mailto:fasthymachava12@gmail.com'
                    target={'_blank'}
                    className='bg-principle-300 hover:bg-blue-800 btn-section'
                >Contacte {<PaperPlaneTilt className='ml-2' size={20} weight='fill'/>} </a>
            </div>
            <Foward path='/About' pathName='About' />
        </motion.div>

    );
}
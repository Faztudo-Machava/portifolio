import { motion } from 'framer-motion';
import { Envelope, PaperPlaneTilt } from 'phosphor-react';
import { Typewriter } from 'react-simple-typewriter'
import { DownloadCV } from '../components/DownloadBtn';
import { Foward } from '../components/FowardBtn';
import { useKey } from '../components/keyPressed';

export function Home() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='flex flex-col justify-center items-center h-[83vh] max-w-full bg-gray-300 dark:bg-gray-800 rounded-md my-4 bg-opacity-40 dark:bg-opacity-60'
        >
            <p className=''>Oi, meu nome é</p>
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
                    className={`
                        dark:bg-principle-300 
                        dark:hover:bg-blue-800
                        bg-blue-500
                        text-white
                        hover:bg-blue-700 
                        btn-section 
                        hover:bg-opacity-90 
                        bg-opacity-90`}
                >Contacte {<Envelope className='ml-2' size={20} weight='fill'/>} </a>
            </div>
            <Foward path='/About' pathName='About' />
        </motion.div>

    );
}
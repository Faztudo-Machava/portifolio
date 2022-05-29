import { motion } from "framer-motion";
import { List, Trophy } from "phosphor-react";
import { Back } from "../components/BackBtn";
import { Foward } from "../components/FowardBtn";
import { Skills } from "../components/Skills";


export function About() {

    const today = new Date();
    let age = today.getFullYear() - 2000

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='flex flex-col justify-center items-center px-10 md:px-28 lg:h-[90vh]'
        >
            <div className="my-6 flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
                    <div className="flex items-center">
                        <p className="py-4 text-justify">
                        Eu sou um jovem de {age} anos de idade apaixonado pela área de desenvolvimento de sistemas, 
                        meu maior foco é o desenvolvimento front-end com mais engajamento nas ferramentas React JS, 
                        Tailwind CSS e Bootstrap. Já tive contacto com várias tecnologias pois minha curiosidade e vontade de aprender é muito grande.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col bg-zinc-700 bg-opacity-50 rounded justify-center items-center py-4 hover:animate-hover text-green-500">
                            <Trophy size={32} />
                            <p className='text-sm my-2'>Experiência</p>
                            <p>2+</p>
                        </div>
                        <div className="flex flex-col bg-zinc-700 bg-opacity-50 rounded justify-center items-center py-4 hover:animate-hover text-green-500">
                            <List size={32} />
                            <p className='text-sm my-2'>Projectos</p>
                            <p>30</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-lg text-center mt-4">Habilidades</h1>
                    <Skills />
                </div>
            </div>
            <Back path='/' pathName='Home' />
            <Foward path='/Projects' pathName='Projects' />
        </motion.div>
    );
}
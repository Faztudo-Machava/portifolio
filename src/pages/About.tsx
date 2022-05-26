import { motion } from "framer-motion";
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
            className='flex flex-col justify-center items-center h-[80vh]'
        >
            <div className="px-48">
                <h1 className="text-xl">Sobre</h1>
                <p className="py-4 px-8">
                    Eu chamo Fausto Machava, tenho {age} sou Mocambicano, vivo na pronvincia de Maputo em Mocambique, no bairro de Magoanine-B
                    avenidade Coronel Sebastiao Marcos Mabote
                </p>

                <h1 className="text-xl mt-4">Habilidades</h1>
                <Skills />
            </div>
            <Back path='/' pathName='Home' />
            <Foward path='/Projects' pathName='Projects' />
        </motion.div>
    );
}

import { motion } from 'framer-motion';
import { WhatsappLogo, Envelope } from 'phosphor-react';
import { Back } from '../components/BackBtn';
import { MessengerLogo } from 'phosphor-react';

export function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=' lg:min-h-[80vh] mt-12'
    >
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-4'>
        <div className='flex flex-col items-center gap-4'>
          <div className='bg-[#006AFF] px-6 py-4 flex gap-4 flex-col items-center min-w-[20rem] lg:min-w-[20rem] bg-opacity-90 rounded-md'>
            <div className="">
              <MessengerLogo width={40} height={40} />
            </div>
            <p>
              Fasthy Machava
            </p>
            <p>
              <a className="text-zinc-200" href='https://m.me/fasthy.machava' target={'_blank'}>Enviar mensagem</a>
            </p>
          </div>
          <div className='bg-[#25D366] px-6 py-4 flex gap-4 flex-col items-center min-w-[20rem] lg:min-w-[20rem] bg-opacity-90 rounded-md'>
            <div className="">
              <WhatsappLogo width={40} height={40} />
            </div>
            <p>
              Fausto Machava
            </p>
            <p>
              <a className="text-zinc-200" href='https://wa.me/258848709975' target={'_blank'}>Enviar mensagem</a>
            </p>
          </div>
          <div className='bg-emerald-600 px-6 py-4 flex gap-4 flex-col items-center min-w-[20rem] lg:min-w-[20rem] bg-opacity-90 rounded-md'>
            <div className="">
              <Envelope width={40} height={40} />
            </div>
            <p>
              Fausto Machava
            </p>
            <p>
              <a className="text-zinc-200" href='mailto:fasthymachava12@gmail.com' target={'_blank'}>Enviar mensagem</a>
            </p>
          </div>
        </div>
        <div className='w-full p-6 flex items-center'>
          <form className='flex flex-col gap-6 w-full' action="" method="post">
            <input className='w-full outline-none px-2 py-3 bg-transparent border-2 border-zinc-200 focus:border-principle-300 rounded' type="text" placeholder='Nome' />
            <input className='w-full outline-none px-2 py-3 bg-transparent border-2 border-zinc-200 focus:border-principle-300 rounded' type="email" placeholder='Email' />
            <textarea className='w-full outline-none px-3 py-2 bg-transparent border-2 border-zinc-200 focus:border-principle-300 rounded resize-none h-40' placeholder='Mensagem'></textarea>
            <div>
              <input className='px-4 py-2 bg-principle-300 bg-opacity-90 rounded cursor-pointer' type="button" value="Enviar" />
            </div>
          </form>
        </div>
      </div>

      <Back path='/Projects' pathName='Projects' />
    </motion.div>
  )
}
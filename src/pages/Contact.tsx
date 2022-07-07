import { motion } from 'framer-motion';
import { WhatsappLogo, Envelope, MessengerLogo} from 'phosphor-react';
import { Back } from '../components/BackBtn';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Loading } from '../components/Loading';
import { Popup } from '../components/Popup';

export function Contact() {
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState<boolean>();
  const [isShowingPopup, setIsShowingPopup] = useState(false)

  const sendEmail = async (e: any) => {
    e.preventDefault();

    setIsSendingEmail(true);

    await emailjs.sendForm('gmail', 'portifolio_email', e.target, '0TXzooXADFoWNPUOR')
      .then((result) => {
        if(result.status == 200) {
          console.log(result.text)
          setIsEmailSent(true)
        }
      }, (error) => {
        setIsEmailSent(false)
        console.log(error.text);
      });

    await e.target.reset();
    setIsSendingEmail(false);
    setIsShowingPopup(true);
  };

  const closePopup = function () {
    setIsShowingPopup(false);
  }


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=' lg:min-h-[80vh] mt-12'
    >
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-4'>
        <div className='flex flex-col items-center gap-4'>
          <div className='bg-[#006AFF] px-6 py-4 flex gap-4 flex-col items-center min-w-[20rem] lg:min-w-[20rem] bg-opacity-90 rounded-md text-white'>
            <div className="">
              <MessengerLogo width={40} height={40} />
            </div>
            <p className='text-white'>
              Fasthy Machava
            </p>
            <p>
              <a className="text-zinc-200 hover:text-white transition-all" href='https://m.me/fasthy.machava' target={'_blank'}>Enviar mensagem</a>
            </p>
          </div>
          <div className='bg-[#25D366] px-6 py-4 flex gap-4 flex-col items-center min-w-[20rem] lg:min-w-[20rem] bg-opacity-90 rounded-md text-white'>
            <div className="">
              <WhatsappLogo width={40} height={40} />
            </div>
            <p className='text-white'>
              Fausto Machava
            </p>
            <p>
              <a className="text-zinc-200 hover:text-white transition-all" href='https://wa.me/258848709975' target={'_blank'}>Enviar mensagem</a>
            </p>
          </div>
          <div className='bg-emerald-600 px-6 py-4 flex gap-4 flex-col items-center min-w-[20rem] lg:min-w-[20rem] bg-opacity-90 rounded-md text-white'>
            <div className="">
              <Envelope width={40} height={40} />
            </div>
            <p className='text-white'>
              Fausto Machava
            </p>
            <p>
              <a className="text-zinc-200 hover:text-white transition-all" href='mailto:fasthymachava12@gmail.com' target={'_blank'}>Enviar mensagem</a>
            </p>
          </div>
        </div>
        <div className='w-full p-6 flex flex-col items-center'>
          <Popup isEmailSent={isEmailSent} show={isShowingPopup} closePopup={closePopup}/>
          <form onSubmit={sendEmail} className='flex flex-col gap-6 w-full' action="" method="post">
            <input
              className='
                    w-full 
                    outline-none 
                    px-2 py-3 
                    bg-transparent
                    border-2 
                    dark:border-gray-200
                    border-gray-400 
                    dark:focus:border-principle-300
                    focus:border-blue-500 
                    rounded'
              type="text"
              required
              placeholder='Assunto'
              name='subject'
            />
            <input
              className='
                    w-full 
                    outline-none 
                    px-2 py-3 
                    bg-transparent
                    border-2 
                    dark:border-gray-200
                    border-gray-400 
                    dark:focus:border-principle-300
                    focus:border-blue-500 
                    rounded'
              type="text"
              required
              placeholder='Nome'
              name='name'
            />
            <input
              className='
                    w-full 
                    outline-none 
                    px-2 py-3 
                    bg-transparent
                    border-2 
                    dark:border-gray-200
                    border-gray-400 
                    dark:focus:border-principle-300
                    focus:border-blue-500 
                    rounded'
              type="email"
              required
              placeholder='Email'
              name='email' />
            <textarea
              className='
                    w-full 
                    outline-none 
                    px-2 py-3 
                    bg-transparent
                    border-2 
                    dark:border-gray-200
                    border-gray-400 
                    dark:focus:border-principle-300
                    focus:border-blue-500 
                    rounded
                    h-40'
              required
              placeholder='Mensagem'
              name='message'></textarea>
            <div>
              <button
                className='
                    px-4 
                    py-2 
                    dark:bg-blue-700
                    dark:hover:bg-blue-900
                    bg-blue-500
                    hover:bg-blue-800
                    text-white
                    transition-all
                    bg-opacity-90 
                    rounded 
                    cursor-pointer'
                disabled={isSendingEmail}
                type="submit"
              >
                {isSendingEmail ? <Loading /> : 'Enviar'}
              </button>
            </div>
          </form>
        </div>
      </div>

      <Back path='/Projects' pathName='Projects' />
    </motion.div>
  )
}
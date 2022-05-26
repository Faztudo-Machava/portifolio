import { EnvelopeSimpleOpen, FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";


export function Footer() {
    return (
        <div className="flex flex-row justify-center">
            <a
                href="#"
                target={"_blank"}
                className='hover:text-principle-300 hover:transition-colors hover:duration-300'
            >
                <FacebookLogo size={32} weight='light'/>
            </a>
            <a
                href="#"
                className="ml-4 hover:text-principle-300 hover:transition-colors hover:duration-300"
                target={"_blank"}
            >
                <WhatsappLogo size={32} weight='light'/>
            </a>
            <a
                href="#"
                className="ml-4 hover:text-principle-300 hover:transition-colors hover:duration-300"
                target={"_blank"}
            >
                <InstagramLogo size={32} weight='light'/>
            </a>
            <a
                href="https://linkedin.com/in/faztudo-machava"
                target={"_blank"}
                className="ml-4 hover:text-principle-300 hover:transition-colors hover:duration-300"
            >
                <LinkedinLogo size={32} weight='light'/>
            </a>
            <a
                href="https://github.com/Faztudo-Machava"
                target={"_blank"}
                className="ml-4 hover:text-principle-300 hover:transition-colors hover:duration-300"
            >
                <GithubLogo size={32} weight='light'/>
            </a>
            <a
                href="mailto:fasthymachava12@gmail.com"
                target={"_blank"}
                className="ml-4 hover:text-principle-300 hover:transition-colors hover:duration-300"
            >
                <EnvelopeSimpleOpen size={32} weight='light'/>
            </a>
        </div>
    )
}
import { EnvelopeSimpleOpen, FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";


export function Footer() {
    return (
        <div className="flex flex-row justify-center gap-1 md:gap-3 2xl:gap-7 pb-2">
            <a
                href="#"
                target={"_blank"}
                className='footer-link'
            >
                <FacebookLogo size={32} weight='light' />
            </a>
            <a
                href="#"
                className="footer-link"
                target={"_blank"}
            >
                <WhatsappLogo size={32} weight='light' />
            </a>
            <a
                href="#"
                className="footer-link"
                target={"_blank"}
            >
                <InstagramLogo size={32} weight='light' />
            </a>
            <a
                href="https://linkedin.com/in/faztudo-machava"
                target={"_blank"}
                className="footer-link"
            >
                <LinkedinLogo size={32} weight='light' />
            </a>
            <a
                href="https://github.com/Faztudo-Machava"
                target={"_blank"}
                className="footer-link"
            >
                <GithubLogo size={32} weight='light' />
            </a>
            <a
                href="mailto:fasthymachava12@gmail.com"
                target={"_blank"}
                className="footer-link"
            >
                <EnvelopeSimpleOpen size={32} weight='light' />
            </a>
        </div>
    )
}
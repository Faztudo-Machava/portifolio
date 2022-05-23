import { EnvelopeSimpleOpen, FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";


export function Footer() {
    return (
        <div className="flex flex-row justify-center">
            <a
                href="#"
                target={"_blank"}
            >
                <FacebookLogo size={32} weight='light' color="white" />
            </a>
            <a
                href="#"
                className="ml-4"
                target={"_blank"}
            >
                <WhatsappLogo size={32} weight='light' color="white" />
            </a>
            <a
                href="#"
                className="ml-4"
                target={"_blank"}
            >
                <InstagramLogo size={32} weight='light' color="white" />
            </a>
            <a
                href="https://linkedin.com/in/faztudo-machava"
                target={"_blank"}
                className="ml-4"
            >
                <LinkedinLogo size={32} weight='light' color="white" />
            </a>
            <a
                href="https://github.com/Faztudo-Machava"
                target={"_blank"}
                className="ml-4"
            >
                <GithubLogo size={32} weight='light' color="white" />
            </a>
            <a
                href="mailto:fasthymachava12@gmail.com"
                target={"_blank"}
                className="ml-4"
            >
                <EnvelopeSimpleOpen size={32} weight='light' color="white" />
            </a>
        </div>
    )
}
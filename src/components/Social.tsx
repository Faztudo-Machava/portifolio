import { Component, ReactSVGElement } from "react";

interface SocialProps {
    socialName: string;
    icon: any;
    link: string;
    color: string;
}

export function Social({ socialName, icon, link, color }: SocialProps) {
    return (
        <div className={`bg-[${color}] px-6 py-4 flex gap-4 flex-col items-center min-w-[20rem] lg:min-w-[20rem] bg-opacity-90 rounded-md`}>
            <div className="">
                {icon}
            </div>
            <p>
                {socialName}
            </p>
            <p>
                <a className="text-zinc-200" href={link}>Enviar mensagem</a>
            </p>
        </div>
    )
}

interface ProjectProps {
    name: string;
    repository?: string;
    link: string;
    img: string;
}

export function Project({ repository, link, img, name }: ProjectProps) {
    return (
        <div className="flex flex-col bg-gray-700 rounded dark:shadow shadow-lg shadow-zinc-500 dark:shadow-zinc-900">
            <div className="group opacity-90 dark:opacity-75 relative hover:opacity-100 transition-all">
                <img className="object-cover" src={img} alt={`imagem do ${name}`} />
                <a 
                    target={`_blank`} 
                    className='
                        hidden 
                        group-hover:block
                        bg-blue-500 
                        dark:bg-principle-300
                        text-white 
                        rounded-xl 
                        absolute 
                        top-[50%] 
                        left-[50%] 
                        translate-x-[-50%] 
                        translate-y-[-50%] 
                        px-6 
                        py-2' 
                    href={link}
                >
                    Abrir
                </a>
            </div>
        </div>
    )
} 
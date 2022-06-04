
interface ProjectProps {
    name: string;
    repository?: string;
    link: string;
    img: string;
}

export function Project({ repository, link, img, name }: ProjectProps) {
    return (
        <div className="flex flex-col bg-gray-700 rounded shadow-lg shadow-zinc-900">
            <div className="group opacity-70 relative hover:opacity-100 transition-all">
                <img className="object-cover" src={img} alt={`imagem do ${name}`} />
                <a 
                    target={`_blank`} 
                    className="hidden group-hover:block bg-principle-300 rounded-xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-6 
                    py-2" 
                    href={link}
                >
                    Abrir
                </a>
            </div>
            {/* <div className="flex flex-col px-5 py-5 gap-4">
                <p className="text-lg">{name}</p>
                <div className="flex justify-between">
                    <div>
                        
                    </div>
                    <div>
                        {repository ? <a target={`_blank`} className="btn-section bg-blue-500" href={repository}>Codigo</a> : ''}
                    </div>
                </div>
            </div> */}
        </div>
    )
} 
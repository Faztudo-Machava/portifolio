
interface ProjectProps {
    name: string;
    repository?: string;
    link: string;
    img: string;
}

export function Project({ repository, link, img, name }: ProjectProps) {
    return (
        <div className="flex flex-col bg-principle-300 rounded shadow-lg shadow-zinc-900">
            <div>
                <img className="object-cover" src={img} alt={`imagem do ${name}`} />
            </div>
            <div className="flex flex-col px-5 py-5 gap-4">
                <p className="text-lg">{name}</p>
                <div className="flex justify-between">
                    <div>
                        <a target={`_blank`} className="btn-section bg-blue-500" href={link}>Open</a>
                    </div>
                    <div>
                        {repository ? <a target={`_blank`} className="btn-section bg-blue-500" href={repository}>Code</a> : ''}
                    </div>
                </div>
            </div>
        </div>
    )
} 
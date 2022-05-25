import { Triangle } from "phosphor-react";
import { Link } from "react-router-dom";

interface fowardProps {
    path: string;
    pathName?: string;
}

export function Foward({path, pathName}: fowardProps){
    return(
        <Link to={path} className='absolute top-[50%] translate-y-[-50%] right-7 flex flex-row items-center transition-all duration-200'>
            <p className='text-center mr-2'>{path}</p>
            <Triangle weight='fill' size={80} className='rotate-90'/>
        </Link>
    );
}
import { Triangle } from "phosphor-react";
import { Link } from "react-router-dom";

interface fowardProps {
    path: string;
    pathName?: string;
}

export function Foward({path, pathName}: fowardProps){
    return(
        <Link to={path} className='absolute top-[50%] translate-y-[-50%] right-3 flex flex-row items-center animate-direction-right'>
            <p className='text-center mr-2'>{pathName}</p>
            <Triangle weight='fill' size={50} className='rotate-90 text-principle-300'/>
        </Link>
    );
}
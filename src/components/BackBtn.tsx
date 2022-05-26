import { Triangle } from "phosphor-react";
import { Link } from "react-router-dom";

interface fowardProps {
    path: string;
    pathName: string;
}

export function Back({path, pathName}: fowardProps){
    return(
        <Link to={path} className='absolute top-[50%] translate-y-[-50%] left-3 flex flex-row-reverse items-center duration-200 animate-direction-left'>
            <p className='text-center ml-2'>{pathName}</p>
            <Triangle weight='fill' size={50} className='rotate-[-90deg] text-principle-300'/>
        </Link>
    );
}
import { Triangle } from "phosphor-react";
import { Link } from "react-router-dom";

interface fowardProps {
    path: string;
    pathName: string;
}

export function Back({path, pathName}: fowardProps){
    return(
        <Link to={path} className='absolute top-[50%] translate-y-[-50%] left-7 flex flex-row-reverse items-center duration-200'>
            <p className='text-center ml-2'>{pathName}</p>
            <Triangle weight='fill' size={80} className='rotate-[-90deg]'/>
        </Link>
    );
}
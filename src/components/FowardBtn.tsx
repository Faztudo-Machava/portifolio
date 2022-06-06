import { Triangle } from "phosphor-react";
import { Link } from "react-router-dom";

interface fowardProps {
    path: string;
    pathName?: string;
}

export function Foward({path, pathName}: fowardProps){
    return(
        <Link to={path} className='right-3 animate-direction-right direction-btn flex-row '>
            <p className='text-center mr-2'>Proxima</p>
            <Triangle weight='fill' className='w-10 h-10 rotate-90 text-blue-500 dark:text-principle-300 2xl:w-28 2xl:h-28'/>
        </Link>
    );
}
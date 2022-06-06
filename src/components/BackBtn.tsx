import { Triangle } from "phosphor-react";
import { Link } from "react-router-dom";

interface fowardProps {
    path: string;
    pathName: string;
}

export function Back({path, pathName}: fowardProps){
    return(
        <Link to={path} className='left-3 direction-btn flex-row-reverse animate-direction-left'>
            <p className='text-center ml-2'>Anterior</p>
            <Triangle weight='fill' className='rotate-[-90deg] text-blue-500 dark:text-principle-300 w-10 h-10 2xl:w-28 2xl:h-28'/>
        </Link>
    );
}
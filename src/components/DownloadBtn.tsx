import { Download } from "phosphor-react";

export function DownloadCV(){
    return(
        <button
            className='border-2 border-principle-300 px-4 py-2 rounded mr-2 hover:bg-principle-300 hover:duration-200 hover:transition-all flex'
        >Download CV {<Download size={19} className='ml-2' weight="fill"/>}</button>
    );
}
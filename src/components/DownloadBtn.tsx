import { Download } from "phosphor-react";

export function DownloadCV(){
    return(
        <a href="https://drive.google.com/file/d/1LrfWnrZLdAvMElnv-ippmFfCKOQMVqOU/view?usp=sharing" target={'_blank'}
            className='border-2 border-principle-300 hover:bg-principle-300 btn-section whitespace-nowrap'
        >Baixar CV {<Download size={19} className='ml-2' weight="fill"/>}</a>
    );
}
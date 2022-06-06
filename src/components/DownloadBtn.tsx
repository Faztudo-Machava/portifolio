import { Download } from "phosphor-react";

export function DownloadCV(){
    return(
        <a href="https://drive.google.com/file/d/1LrfWnrZLdAvMElnv-ippmFfCKOQMVqOU/view?usp=sharing" target={'_blank'}
            className={`
                border-2 
                border-blue-500 
                dark:border-principle-300 
                dark:hover:bg-principle-300 
                hover:bg-blue-500 
                hover:text-white 
                btn-section 
                whitespace-nowrap 
                gap-2 
                hover:bg-opacity-90`}
        >Baixar CV {<Download size={19} weight="fill"/>}</a>
    );
}
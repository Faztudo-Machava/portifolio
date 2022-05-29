import { Download } from "phosphor-react";

export function DownloadCV(){
    return(
        <a href="https://www.mediafire.com/file/h1p15d163nk89ib/Faztudo_Machava_CV_Ingl%25C3%25AAs.pdf/file" target={'_blank'}
            className='border-2 border-principle-300 hover:bg-principle-300 btn-section whitespace-nowrap'
        >Baixar CV {<Download size={19} className='ml-2' weight="fill"/>}</a>
    );
}
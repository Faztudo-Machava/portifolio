import icon from '../assets/business-task.svg';

interface BussinessTaskProps{
    size: number;
    className?: string;
}

export function BusinessTask({size, className}:BussinessTaskProps){
    return(
        <img className='text-zinc-200' src={icon} width={size} height={size}/>
    )
}
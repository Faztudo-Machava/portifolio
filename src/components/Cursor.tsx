import { Circle } from "phosphor-react"
import { useEffect, useState } from "react"

interface CursorProps{
    classes : string
}

function useMouse(){
    const [mousePosition, setMousePosition] = useState({
      x: null,
      y: null
    })
  
    useEffect(()=>{
      function handle(e: EventListener | any){
        setMousePosition({
          x: e.pageX,
          y: e.pageY
        })
      }
  
      document.addEventListener('mousemove', handle)
      return ()=> document.removeEventListener('mousemove', handle)
    })
  
    return mousePosition;
  } 

export function Cursor({classes}: CursorProps) {

    const {x, y} = useMouse();

    return (
        <div
            style={{ position: "absolute", top: `${y}px`, left: `${x}px` }}
            className={`h-10 w-10 rounded-full bg-transparent border-4 opacity-50 translate-x-[-50%] translate-y-[-50%] z-[-1] flex justify-center items-center ${classes}`}
        >
            <Circle size={20} className='animate-zoom'/>
        </div>
    )
}
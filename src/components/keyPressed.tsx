import { useEffect, useRef } from "react";

export function useKey(key: string, call: Function){
    const callbackRef = useRef(call);

    useEffect(()=>{
        callbackRef.current = call
    })

    useEffect(()=>{
        function handle(event: KeyboardEvent){
            if(event.code === key){
                callbackRef.current(event);
            }
        }
        document.addEventListener(`keypress`, handle);
        return () => document.addEventListener(`keypress`, handle);
    }, [key])
}

export function KeyPressed(){
    return(
        <div>Key pressed</div>
    )
}
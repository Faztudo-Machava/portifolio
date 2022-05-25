import { Footer } from './components/Footer';
import { Nav } from './components/Nav'
import { RoutesComp } from './components/Routes';
import { useEffect, useState } from 'react';

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

function App() {
  const {x, y} = useMouse();

  return (
    <>
      <div
        style={{position: "absolute", top: `${y}px`, left: `${x}px`}} 
        className={`h-10 w-10 rounded-full bg-neutral-200 opacity-50 translate-x-[-50%] translate-y-[-50%] z-[-1]`}
      ></div>
      <Nav />
      <RoutesComp />
      <Footer />
    </>
  )
}

export default App

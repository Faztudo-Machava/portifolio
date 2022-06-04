import { Footer } from './components/Footer';
import { Nav } from './components/Nav'
import { RoutesComp } from './components/Routes';
import { Cursor } from './components/Cursor';
import { useKey } from './components/keyPressed';



function App() {
  function handle(){
    alert(`arrow clicked`);
  }

  useKey("ArrowRight", handle);

  return (
    <>
      <Nav />
      <Cursor classes='hidden md:flex'/>
      <RoutesComp />
      <Footer />
    </>
  )
}

export default App

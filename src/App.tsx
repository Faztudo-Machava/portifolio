import { Footer } from './components/Footer';
import { Nav } from './components/Nav'
import { RoutesComp } from './components/Routes';
import { Cursor } from './components/Cursor';
import { useKey } from './components/keyPressed';
import { ThemeBtn } from './components/ThemeBtn';



function App() {
  function handle() {
    alert(`arrow clicked`);
  }

  useKey("ArrowRight", handle);

  return (
    <>
      <ThemeBtn />
      <Nav />
      <Cursor classes='hidden md:flex' />
      <RoutesComp />
      <Footer />
    </>
  )
}

export default App

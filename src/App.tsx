import { Footer } from './components/Footer';
import { Nav } from './components/Nav'
import { RoutesComp } from './components/Routes';
import { Cursor } from './components/Cursor';



function App() {

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

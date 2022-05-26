import { Footer } from './components/Footer';
import { Nav } from './components/Nav'
import { RoutesComp } from './components/Routes';
import { Cursor } from './components/Cursor';



function App() {

  return (
    <>
      <Nav />
      <Cursor classes='sm:d-none'/>
      <RoutesComp />
      <Footer />
    </>
  )
}

export default App

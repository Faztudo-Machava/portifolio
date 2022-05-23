import { Route, Routes, useLocation } from 'react-router-dom'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { Home } from '../pages/Home'
import { Projects } from '../pages/Projects'
import { AnimatePresence } from 'framer-motion';


export function RoutesComp() {
    const route = {
        Home:{
            path: '/',
            component: <Home />
        },
        About:{
            path: 'about',
            component: <About />
        },
        Projects: {
            path: 'projects',
            component: <Projects />
        },
        Contact: {
            path: 'contact',
            component: <Contact />
        }
    }
    const location = useLocation();

    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                {Object.entries(route).map(([key , item])=>{
                    return(
                        <>
                            <Route path={item.path} element={item.component} />
                        </>
                    )
                })}
            </Routes>
        </AnimatePresence>
    )
}
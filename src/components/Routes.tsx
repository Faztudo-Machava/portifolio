import { Route, Routes, useLocation } from 'react-router-dom'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { Home } from '../pages/Home'
import { Projects } from '../pages/Projects'
import { AnimatePresence } from 'framer-motion';
import { Back } from './BackBtn'
import { Foward } from './FowardBtn'


export function RoutesComp() {
    const route = {
        Home:{
            path: '/',
            component: <Home />,
            next: 'About',
            prev: '',
        },
        About:{
            path: 'About',
            component: <About />,
            next: 'Projects',
            prev: 'Home',
        },
        Projects: {
            path: 'Projects',
            component: <Projects />,
            next: 'Contact',
            prev: 'Projects',
        },
        Contact: {
            path: 'Contact',
            component: <Contact />,
            next: '',
            prev: 'Projects',
        }
    }
    const location = useLocation();
    let next = '';
    let prev = '';
    

    return(
        <>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    {Object.entries(route).map(([key , item])=>{
                        if(item.path == location.pathname){
                            next = item.next;
                            prev = item.prev;
                        }
                        return(
                            <Route key={key} path={item.path} element={item.component} />
                        )
                    })}
                </Routes>
            </AnimatePresence>
        </>
    )
}
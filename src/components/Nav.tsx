import { House, List, PaperPlaneTilt, User } from 'phosphor-react'
import { NavLink } from 'react-router-dom';

export function Nav() {

    const routes = {
        HOME: {
            path: '/',
            icon: <House size={32} weight='fill' />
        },
        ABOUT: {
            path: 'About',
            icon: <User size={32} weight='fill' />
        },
        PROJECTS: {
            path: 'Projects',
            icon: <List size={32} weight='fill' />
        },
        CONTACT: {
            path: 'Contact',
            icon: <PaperPlaneTilt size={32} weight='fill' />
        }
    }

    return (
        <>
            <div className='flex flex-row justify-center fixed left-[50%] translate-x-[-50%] top-[1vh]'>
                <div className="px-4 py-2 flex flex-row bg-blue-500 dark:bg-slate-700 bg-opacity-90 rounded-lg gap-3 shadow">
                    {Object.entries(routes).map(([key, item]) => {
                        return (
                            <NavLink
                                key={key}
                                to={item.path}
                                className={
                                    ({ isActive }) =>
                                        isActive ? 'dark:text-principle-300 text-white' : 'text-zinc-200 dark:text-zinc-200 dark:hover:text-principle-300 hover:text-white hover:transition-colors hover:duration-300'
                                }
                            >
                                {item.icon}
                            </NavLink>
                        )
                    })}
                </div>
            </div>
        </>
    );
}
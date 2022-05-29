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
                <div className="px-4 py-2 flex flex-row bg-zinc-700 bg-opacity-50 rounded-lg gap-3 shadow-xl shadow-zinc-900">
                    {Object.entries(routes).map(([key, item]) => {
                        return (
                            <NavLink
                                key={key}
                                to={item.path}
                                className={
                                    ({ isActive }) =>
                                        isActive ? 'text-principle-300' : 'text-zinc-200 hover:text-principle-300 hover:transition-colors hover:duration-300'
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
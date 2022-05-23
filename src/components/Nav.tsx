import { House, List, PaperPlaneTilt, User } from 'phosphor-react'
import { Link, NavLink } from 'react-router-dom';

export function Nav() {

    const routes = {
        HOME: {
            path: '/',
            icon: <House size={32} weight='fill' />
        },
        ABOUT: {
            path: '/about',
            icon: <User className='ml-2' size={32} weight='fill' />
        },
        PROJECTS: {
            path: '/projects',
            icon: <List className='ml-2' size={32} weight='fill' />
        },
        CONTACT: {
            path: '/contact',
            icon: <PaperPlaneTilt className='ml-2' size={32} weight='fill' />
        }
    }

    return (
        <>
            <div className='flex flex-row justify-center'>
                <div className="px-4 py-2 flex flex-row bg-[#ffffff3b] bg-opacity-[26] rounded-lg">
                    {Object.entries(routes).map(([key, item]) => {
                        return (
                            <>
                                <NavLink
                                    key={key}
                                    to={item.path}
                                    className={
                                        ({ isActive }) =>
                                            isActive ? 'text-action-300' : 'text-brand-300'
                                    }
                                >
                                    {item.icon}
                                </NavLink>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    );
}
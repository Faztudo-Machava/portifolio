import bootstrap from '../assets/icons/bootstrap.svg';
import react from '../assets/icons/react.svg';
import css3 from '../assets/icons/css3.svg';
import git from '../assets/icons/git.svg';
import html5 from '../assets/icons/html5.svg';
import java from '../assets/icons/java.svg';
import laravel from '../assets/icons/laravel.svg';
import mysql from '../assets/icons/mysql.svg';
import node from '../assets/icons/node.svg';
import oracle from '../assets/icons/oracle.svg';
import php from '../assets/icons/php.svg';
import vue from '../assets/icons/vue.svg';
import javascript from '../assets/icons/javascript.svg';
import tailwindcss from '../assets/icons/tailwindcss.svg'


const skills = {
    HTML5: {
        name: 'HTML5',
        icon: html5
    },
    CSS3: {
        name: 'CSS3',
        icon: css3
    },
    JAVASCRIPT: {
        name: 'JavaScript',
        icon: javascript
    },
    BOOTSTRAP: {
        name: 'Bootstrap',
        icon: bootstrap
    },
    TAILWINDCSS: {
        name: 'Tailwind css',
        icon: tailwindcss
    },
    REACT: {
        name: 'React JS',
        icon: react
    },
    LARAVEL: {
        name: 'Laravel',
        icon: laravel
    },
    NODE: {
        name: 'Node.js',
        icon: node
    },
    PHP: {
        name: 'PHP',
        icon: php
    },
    JAVA: {
        name: 'Java',
        icon: java
    },
    MYSQL: {
        name: 'MySql',
        icon: mysql
    },
    GIT: {
        name: 'Git',
        icon: git
    }
}

export function Skills() {
    return (
        <div className="grid grid-cols-6 gap-4 px-8 py-3">
            {Object.entries(skills).map(([key, item])=>{
                return(
                    <div key={key} className="flex flex-col bg-zinc-700 bg-opacity-50 rounded justify-center items-center py-4 hover:animate-hover">
                        <img src={item.icon} alt={item.name} className="h-10 w-10" />
                        <p className='text-sm mt-2'>{item.name}</p>
                    </div>
                )
            })}
        </div>
    )
}
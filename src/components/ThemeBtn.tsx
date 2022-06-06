import { Lightbulb, Moon } from "phosphor-react";
import { useEffect, useState } from "react";

export function ThemeBtn(){

    const [theme, setTheme] = useState<string>('dark');
    const colorTheme : string = theme === 'dark' ? 'light' : 'dark'; 
    useEffect(()=>{
        const root = window.document.documentElement;

        theme === 'dark' ? root.classList.remove('light') : root.classList.remove('dark');
        root.classList.add(theme);
    }, [theme]);

    return(
        <div className="fixed top-4 right-4">
            <span className="cursor-pointer" onClick={() => setTheme(colorTheme)}>
                {theme === 'dark' ? <Lightbulb size={28} /> : <Moon size={28}/> }
            </span>
        </div>
    )
}

//onClick={() => setTheme(colorTheme)}
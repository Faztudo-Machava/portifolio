import { useEffect, useState } from 'react';

export const [theme, setTheme] = useState<string>('dark');

export function UseDarkMode() {
    const colorTheme = theme === 'dark' ? 'light' : 'dark'; 
    useEffect(()=>{
        const root = window.document.documentElement;

        root.classList.add(theme);
    }, [theme]);

    return [colorTheme, setTheme];
}


import { useEffect, useState } from 'react';

export function UseDarkMode() {
    const [theme, setTheme] = useState<string>('dark');
    const colorTheme = theme === 'dark' ? 'light' : 'dark'; 
    useEffect(()=>{
        const root = window.document.documentElement;

        root.classList.add(theme);
    }, [theme]);

    return [colorTheme, setTheme];
}


import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

    useEffect(() => {
        
        const bodyElement = document.querySelector('body');
        darkMode === true ? bodyElement.classList.add('dark-mode') : bodyElement.classList.remove('dark-mode');

    }, [darkMode])

    return [darkMode, setDarkMode]
}

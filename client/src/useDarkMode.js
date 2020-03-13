import { useEffect} from 'react';
import { useLocalStorage } from './useLocalStorage';

const useDarkMode = () => {

    const [enableDark, setEnableDark] = useLocalStorage('dark-mode-enabled');

    useEffect( () => {

        const className = 'dark-mode';
        const element = window.document.body;

        if (enableDark) {
            element.classList.add(className);
        } else {
            element.classList.remove(className);
        }
    }, [enableDark] );

    return [enableDark, setEnableDark];
};

export default useDarkMode;
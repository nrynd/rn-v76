import { createContext } from 'react';

export const Context = createContext({
    toggleTheme: (_mode: string) => { },
    theme: 'light',
});

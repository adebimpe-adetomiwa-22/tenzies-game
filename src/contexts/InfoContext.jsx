import { createContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const InfoContext = createContext(null);

const InfoContextProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', '');
    const [history, setHistory] = useLocalStorage(
        'history',
        JSON.stringify([])
    );

    const value = {
        user,
        setUser,
        history,
        setHistory,
    };

    return (
        <InfoContext.Provider value={value}>{children}</InfoContext.Provider>
    );
};

export default InfoContextProvider;

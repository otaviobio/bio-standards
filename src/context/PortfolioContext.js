'use client';

import { createContext, useContext, useState } from 'react';

const PortfolioContext = createContext();

export const usePortfolioContext = () => {
    return useContext(PortfolioContext);
};

export const PortfolioContextProvider = ({ children }) => {
    const [isNavModal, setIsNavModal] = useState(false);
    const [currRoute, setCurrRoute] = useState('');

    return (
        <PortfolioContext.Provider
            value={{
                isNavModal,
                setIsNavModal,
                currRoute,
                setCurrRoute,
            }}
        >
            {children}
        </PortfolioContext.Provider>
    );
};

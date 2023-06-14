'use client';

import { createContext, useContext, useState } from 'react';

const ComponentContext = createContext();

export const useComponentContext = () => {
    return useContext(ComponentContext);
};

export const ComponentContextProvider = ({ children }) => {
    const [sideBarOpen, setSideBarOpen] = useState(false);

    return (
        <ComponentContext.Provider
            value={{
                sideBarOpen,
                setSideBarOpen,
            }}
        >
            {children}
        </ComponentContext.Provider>
    );
};

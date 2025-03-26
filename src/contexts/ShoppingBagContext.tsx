'use client'

import { createContext, useContext, useState, ReactNode } from "react";

interface ShoppingBagContextType {
    isShoppingBagOpen: boolean;
    openShoppingBag: () => void;
    closeShoppingBag: () => void;
}

const ShoppingBagContext = createContext<ShoppingBagContextType | undefined>(undefined);

export const ShoppingBagProvider = ({ children }: { children: ReactNode }) => {
    const [isShoppingBagOpen, setIsShoppingBagOpen] = useState(false);

    const openShoppingBag = () => {
        setIsShoppingBagOpen(true);
        document.documentElement.style.overflowY = "hidden";
    }

    const closeShoppingBag = () => {
        setIsShoppingBagOpen(false);
        document.documentElement.style.overflowY = "";
    }

    return (
        <ShoppingBagContext.Provider value={{ isShoppingBagOpen, openShoppingBag, closeShoppingBag }}>
            {children}
        </ShoppingBagContext.Provider>
    );
};

export const useShoppingBag = () => {
    const context = useContext(ShoppingBagContext);
    if (!context) {
        throw new Error("useShoppingBag must be used within a ShoppingBagProvider");
    }
    return context;
};

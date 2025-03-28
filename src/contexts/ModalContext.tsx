'use client'

import { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    openModal: () => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
        document.body.style.overflow = "hidden";
    }
    const closeModal = () => {
        setIsOpen(false);
        document.body.style.overflow = "";
    }

    return (
        <ModalContext.Provider value={{ isOpen, setIsOpen, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};

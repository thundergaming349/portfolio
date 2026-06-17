import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Default language: English (en)
    const [lang, setLang] = useState('en');
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [pendingLang, setPendingLang] = useState(null);

    const requestLanguageChange = (newLang) => {
        if (newLang !== lang) {
            setPendingLang(newLang);
            setShowConfirmModal(true);
        }
    };

    const confirmLanguageChange = () => {
        if (pendingLang) {
            setLang(pendingLang);
            setPendingLang(null);
        }
        setShowConfirmModal(false);
    };

    const cancelLanguageChange = () => {
        setPendingLang(null);
        setShowConfirmModal(false);
    };

    return (
        <LanguageContext.Provider value={{
            lang,
            requestLanguageChange,
            showConfirmModal,
            pendingLang,
            confirmLanguageChange,
            cancelLanguageChange
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);

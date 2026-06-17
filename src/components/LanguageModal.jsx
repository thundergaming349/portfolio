import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageModal = () => {
    const { showConfirmModal, pendingLang, confirmLanguageChange, cancelLanguageChange } = useLanguage();

    if (!showConfirmModal) return null;

    const isEn = pendingLang === 'en';

    const titleText = isEn ? 'Change Language' : 'Ubah Bahasa';
    const bodyText = isEn 
        ? 'Are you sure you want to change the website language to English?' 
        : 'Apakah Anda yakin ingin mengubah bahasa website ke Bahasa Indonesia?';
    const confirmBtnText = isEn ? 'Yes, Change' : 'Ya, Ubah';
    const cancelBtnText = isEn ? 'Cancel' : 'Batal';

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '1rem'
        }}>
            <div className="card shadow-lg border-0 rounded-4" style={{
                maxWidth: '450px',
                width: '100%',
                backgroundColor: '#ffffff',
                color: '#333333',
                overflow: 'hidden',
                animation: 'modalFadeIn 0.3s ease-out'
            }}>
                <div className="card-body p-4 text-center">
                    <div className="mb-3">
                        <i className="fa-solid fa-language text-secondary" style={{ fontSize: '3rem' }}></i>
                    </div>
                    <h4 className="fw-bold mb-3">{titleText}</h4>
                    <p className="text-muted mb-4">{bodyText}</p>
                    <div className="d-flex justify-content-center gap-3">
                        <button 
                            className="btn btn-outline-secondary px-4 py-2 rounded-3 fw-semibold"
                            onClick={cancelLanguageChange}
                        >
                            {cancelBtnText}
                        </button>
                        <button 
                            className="btn btn-dark px-4 py-2 rounded-3 fw-semibold"
                            onClick={confirmLanguageChange}
                            style={{ backgroundColor: '#303841', borderColor: '#303841' }}
                        >
                            {confirmBtnText}
                        </button>
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes modalFadeIn {
                    from { transform: scale(0.95); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default LanguageModal;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CookieConsentProps {
    message?: string;
    acceptText?: string;
    policyLink?: string;
    policyText?: string;
}

const CookieConsent: React.FC<CookieConsentProps> = ({
    message = "Этот сайт использует файлы cookie для улучшения вашего взаимодействия. Продолжая использовать сайт, вы соглашаетесь с нашей политикой.",
    acceptText = "Принять",
    policyLink = "/privacy-policy",
    policyText = "Подробнее"
}) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleAccept = () => {
        setIsVisible(false);
        localStorage.setItem('cookieConsent', 'true');
    };

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (consent === 'true') {
            setIsVisible(false);
        }
    }, []);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed bottom-6 left-6 right-6 md:right-auto bg-dark-bg text-white p-4 rounded-lg shadow-lg z-40"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
        >
            <p className="text-sm mb-2">{message}</p>
            <div className="flex justify-between items-center">
                <button
                    onClick={handleAccept}
                    className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition"
                >
                    {acceptText}
                </button>
                <a
                    href={policyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-green underline hover:text-secondary"
                >
                    {policyText}
                </a>
            </div>
        </motion.div>
    );
};

export default CookieConsent;

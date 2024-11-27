import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

const FloatingButton: React.FC = () => {
    const handleClick = () => {
        window.open('https://t.me/andrey_manager_1', '_blank'); // Замените на ваш Telegram username
    };

    return (
        <div
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-lg cursor-pointer hover:bg-secondary transition-all duration-300 transform hover:scale-110"
            onClick={handleClick}
            title="Связаться с оператором"
        >
            <FaTelegramPlane className="text-2xl" />
        </div>
    );
};

export default FloatingButton;

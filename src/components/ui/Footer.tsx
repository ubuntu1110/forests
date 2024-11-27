import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-forest-green text-light-green py-8">
            <div className="container mx-auto px-4 text-center">
                {/* Юридическая информация */}
                <div className="mb-6">
                    <p className="text-sm">
                        Юридический адрес: ООО «Зимний Лес», г. Минск, ул. Берёзовая, 15.
                    </p>
                    <p className="text-sm">УНП 202455789</p>
                </div>

                {/* Разделительная линия */}
                <div className="border-t border-light-green my-6"></div>

                {/* Telegram */}
                <div className="flex justify-center items-center space-x-2 text-2xl">
                    <FaTelegramPlane className="text-light-green" />
                    <a
                        href="https://t.me/YourTelegramUsername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light-green hover:text-gold transition-colors text-lg"
                    >
                        Написать нам в Telegram
                    </a>
                </div>

                {/* Копирайт */}
                <div className="mt-6">
                    <p className="text-sm">
                        &copy; 2024 ООО «Зимний Лес». Все права защищены.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

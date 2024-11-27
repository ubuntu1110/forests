import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaTree } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false); // Для выпадающего меню
    const menuRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLUListElement>(null);
    let dropdownTimeout: NodeJS.Timeout;

    // Обработчик для клика вне меню
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
                setDropdownOpen(false); // Закрываем выпадающее меню
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleMouseEnter = () => {
        clearTimeout(dropdownTimeout); // Останавливаем таймер на исчезновение
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        dropdownTimeout = setTimeout(() => {
            setDropdownOpen(false);
        }, 200); // Задержка перед закрытием меню
    };

    return (
        <nav className="bg-forest-green text-light-green fixed w-full top-0 z-50 shadow-lg">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Логотип */}
                <div className="flex items-center">
                    <FaTree className="text-3xl text-gold mr-2" />
                    <span className="text-2xl font-bold tracking-widest">WinterForests</span>
                </div>

                {/* Меню для больших экранов */}
                <ul className="hidden md:flex space-x-8 items-center">
                    <li>
                        <Link to="/" className="hover:text-gold transition-colors">Главная</Link>
                    </li>
                    <li
                        className="relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span className="hover:text-gold transition-colors cursor-pointer">
                            О нас
                        </span>
                        {dropdownOpen && (
                            <motion.ul
                                ref={dropdownRef}
                                className="absolute bg-dark-bg text-light-green left-0 mt-2 p-4 rounded-lg shadow-lg space-y-2"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                <li>
                                    <Link
                                        to="/about"
                                        className="block hover:text-gold transition-colors"
                                    >
                                        О нас
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/testimonials"
                                        className="block hover:text-gold transition-colors"
                                    >
                                        Отзывы
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/map"
                                        className="block hover:text-gold transition-colors"
                                    >
                                        Карта
                                    </Link>
                                </li>
                            </motion.ul>
                        )}
                    </li>
                    <li>
                        <Link to="/vacancies" className="hover:text-gold transition-colors">
                            Вакансии
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-gold transition-colors">Контакты</Link>
                    </li>
                </ul>

                {/* Иконка меню для мобильных устройств */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        className="focus:outline-none"
                    >
                        {isOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
                    </button>
                </div>
            </div>

            {/* Мобильное меню */}
            {isOpen && (
                <div ref={menuRef} className="bg-forest-green text-light-green md:hidden">
                    <ul className="space-y-6 py-4 px-6 text-center">
                        <li>
                            <Link
                                to="/"
                                className="block hover:text-gold transition-colors"
                                onClick={() => setIsOpen(false)} // Закрываем меню при клике на ссылку
                            >
                                Главная
                            </Link>
                        </li>
                        <li>
                            <span
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="block hover:text-gold transition-colors cursor-pointer"
                            >
                                О нас
                            </span>
                            {dropdownOpen && (
                                <ul className="mt-2 space-y-2">
                                    <li>
                                        <Link
                                            to="/about"
                                            className="block hover:text-gold transition-colors"
                                            onClick={() => setIsOpen(false)} // Закрываем меню при клике
                                        >
                                            О нас
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/testimonials"
                                            className="block hover:text-gold transition-colors"
                                            onClick={() => setIsOpen(false)} // Закрываем меню при клике
                                        >
                                            Отзывы
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/map"
                                            className="block hover:text-gold transition-colors"
                                            onClick={() => setIsOpen(false)} // Закрываем меню при клике
                                        >
                                            Карта
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <Link
                                to="/vacancies"
                                className="block hover:text-gold transition-colors"
                                onClick={() => setIsOpen(false)} // Закрываем меню при клике
                            >
                                Вакансии
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Contact"
                                className="block hover:text-gold transition-colors"
                                onClick={() => setIsOpen(false)} // Закрываем меню при клике
                            >
                                Контакты
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

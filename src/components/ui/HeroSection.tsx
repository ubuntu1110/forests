import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
    title: string;
    subtitle: string;
    buttonText: string;
    backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, buttonText, backgroundImage }) => {
    return (
        <motion.div
            className="relative text-center py-28 md:py-36 lg:py-48 flex flex-col items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Градиентный слой */}
            <div className="absolute inset-0 bg-gradient-to-b from-forest-green/80 to-black/60"></div>

            {/* Текст и кнопка */}
            <motion.div
                className="relative z-10 max-w-3xl mx-auto px-6"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-light-green mb-6 drop-shadow-lg">
                    {title}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-white mb-10 drop-shadow">
                    {subtitle}
                </p>
                <Link to="/vacancies">
                    <motion.button
                        className="bg-primary text-white px-10 py-4 rounded-lg text-lg md:text-xl font-medium hover:bg-secondary hover:text-forest-green transition-all duration-300 shadow-xl transform hover:scale-105"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    >
                        {buttonText}
                    </motion.button>
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default HeroSection;

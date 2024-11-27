import React from 'react';
import { motion } from 'framer-motion';

interface FeatureItemProps {
    image: string;
    title: string;
    text: string;
    initialX?: number;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ image, title, text, initialX = -50 }) => {
    return (
        <motion.div
            className="flex flex-col md:flex-row items-center bg-gradient-to-br from-light-green to-forest-green text-dark-bg rounded-xl md:rounded-lg shadow-lg p-4 md:p-8 lg:p-10 space-y-6 md:space-y-0 md:space-x-6 hover:shadow-2xl transition-shadow relative overflow-hidden group"
            initial={{ opacity: 0, x: initialX }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.7,
                type: 'spring',
                bounce: 0.4,
            }}
        >
            {/* Анимационный фон */}
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-primary to-secondary transition-opacity duration-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
                whileHover={{ opacity: 0.2 }}
            ></motion.div>

            {/* Изображение */}
            <motion.img
                src={image}
                alt={title}
                className="w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-4 border-forest-green object-cover z-10"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
            />

            {/* Текст */}
            <motion.div
                className="text-center md:text-left z-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
            >
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-light-green mb-2 group-hover:text-secondary transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-xs md:text-sm lg:text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                    {text}
                </p>
            </motion.div>
        </motion.div>
    );
};

export default FeatureItem;

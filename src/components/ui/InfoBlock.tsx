import React from 'react';
import { motion } from 'framer-motion';

interface InfoBlockProps {
    image: string;
    title: string;
    text: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ image, title, text }) => {
    return (
        <motion.div
            className="bg-gradient-to-b from-light-green to-forest-green p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 text-dark-bg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {/* Изображение */}
            <motion.img
                src={image}
                alt={title}
                className="w-full h-40 object-cover rounded-lg mb-4 shadow-md"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
            />

            {/* Заголовок */}
            <motion.h2
                className="text-xl md:text-2xl font-bold text-light-green mb-2"
                whileHover={{ color: '#ffd700' }} // Меняем цвет на золотой при наведении
            >
                {title}
            </motion.h2>

            {/* Текст */}
            <motion.p
                className="text-sm md:text-base leading-relaxed"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                {text}
            </motion.p>
        </motion.div>
    );
};

export default InfoBlock;

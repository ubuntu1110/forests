import React from 'react';
import { motion } from 'framer-motion';
import VacanciesSection from '../ui/VacanciesSection';

const Vacancies: React.FC = () => {
    return (
        <motion.div
            className="p-8 bg-gradient-to-br from-light-green to-forest-green text-dark-bg min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.h1
                className="text-4xl md:text-5xl font-bold mb-8 text-center text-white drop-shadow-lg"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                Присоединяйтесь к нашей команде! Мы предлагаем конкурентоспособные условия и возможности роста.
            </motion.h1>
            <motion.p
                className="text-lg md:text-xl text-center mb-8 text-light-green"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
            </motion.p>
            <VacanciesSection />
        </motion.div>
    );
};

export default Vacancies;

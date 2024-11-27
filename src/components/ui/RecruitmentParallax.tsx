import React, { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import { RECRUITMENT_SECTION } from '../../constants/texts';
import Modal from './Modal';

const RecruitmentParallax: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="parallax-container relative h-80 md:h-96 w-full">
            {/* Параллакс-изображение */}
            <Parallax translateY={[-20, 20]} className="absolute inset-0">
                <img
                    src={require('../../assets/parallax-image.jpg')}
                    alt="Параллакс"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
            </Parallax>

            {/* Содержимое */}
            <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-6 py-4">
                <motion.h2
                    className="text-3xl md:text-5xl font-extrabold mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    {RECRUITMENT_SECTION.title}
                </motion.h2>
                <motion.p
                    className="text-base md:text-lg mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    dangerouslySetInnerHTML={{ __html: RECRUITMENT_SECTION.subtitle }}
                />
                <motion.button
                    className="mt-4 bg-primary text-dark-bg px-8 py-4 rounded-full text-lg font-medium hover:bg-secondary hover:text-white transition-all duration-300 shadow-xl transform hover:scale-105"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setIsModalOpen(true)}
                >
                    {RECRUITMENT_SECTION.buttonText}
                </motion.button>
            </div>

            {/* Модальное окно */}
            {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
        </div>
    );
};

export default RecruitmentParallax;

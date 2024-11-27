import React from 'react';
import { FaTree, FaSeedling, FaLeaf } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutUs: React.FC = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="mb-16 bg-gradient-to-br from-light-green to-forest-green text-dark-bg py-12 px-8 rounded-lg shadow-lg">
            <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">О нас</h1>
                <p className="text-lg leading-relaxed text-light-green drop-shadow">
                    Мы являемся ведущими производителями и поставщиками экологически чистых елей в Беларуси и за её пределами.
                    Наш подход к устойчивому развитию лесного хозяйства гарантирует качество и заботу о природе.
                </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
                {/* Карточка 1 */}
                <motion.div
                    className="flex flex-col items-center bg-white text-dark-bg p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <FaTree className="text-5xl text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Опыт в лесном хозяйстве</h3>
                    <p>Более 10 лет успешной работы с природными ресурсами.</p>
                </motion.div>
                {/* Карточка 2 */}
                <motion.div
                    className="flex flex-col items-center bg-white text-dark-bg p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <FaSeedling className="text-5xl text-secondary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Экологически чистые методы</h3>
                    <p>Мы выращиваем растения, сохраняя природный баланс.</p>
                </motion.div>
                {/* Карточка 3 */}
                <motion.div
                    className="flex flex-col items-center bg-white text-dark-bg p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <FaLeaf className="text-5xl text-light-green mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Сохранение природы</h3>
                    <p>Наша миссия — заботиться о природе для будущих поколений.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutUs;

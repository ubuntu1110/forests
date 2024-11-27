import React from 'react';
import { motion } from 'framer-motion';
import { FaSeedling, FaRecycle, FaHandsHelping, FaCheckCircle } from 'react-icons/fa';

const Advantages: React.FC = () => {
    const advantages = [
        {
            icon: <FaSeedling className="text-5xl text-primary mb-4" />,
            title: 'Устойчивое развитие',
            description: 'Мы заботимся о природе и стремимся к восстановлению лесных ресурсов.',
        },
        {
            icon: <FaRecycle className="text-5xl text-secondary mb-4" />,
            title: 'Экологические стандарты',
            description: 'Наша продукция соответствует всем экологическим требованиям.',
        },
        {
            icon: <FaCheckCircle className="text-5xl text-light-green mb-4" />,
            title: 'Высокое качество',
            description: 'Мы гарантируем надежность и долговечность нашей продукции.',
        },
        {
            icon: <FaHandsHelping className="text-5xl text-dark-bg mb-4" />,
            title: 'Индивидуальный подход',
            description: 'Мы учитываем потребности каждого клиента и обеспечиваем персональный сервис.',
        },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="py-12 bg-gradient-to-br from-light-green to-forest-green text-white rounded-lg shadow-lg">
            <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
                    Наши преимущества
                </h2>
                <p className="text-lg md:text-xl text-light-green drop-shadow">
                    Мы стремимся к совершенству в каждом аспекте нашей работы.
                </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12">
                {advantages.map((advantage, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center bg-white text-dark-bg p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 + index * 0.2 }}
                    >
                        {advantage.icon}
                        <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                        <p className="text-center text-sm md:text-base leading-relaxed">
                            {advantage.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Advantages;

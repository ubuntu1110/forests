import React from 'react';
import { FaTree, FaSeedling, FaLeaf } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProductCards: React.FC = () => {
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <section className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Наша продукция</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <FaTree className="text-5xl text-primary mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Новогодние ели</h3>
                    <p>Ели высшего качества для ваших праздников.</p>
                </motion.div>
                <motion.div
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <FaSeedling className="text-5xl text-secondary mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Декоративные растения</h3>
                    <p>Идеальные растения для садов и парков.</p>
                </motion.div>
                <motion.div
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <FaLeaf className="text-5xl text-dark-bg mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Экологичная древесина</h3>
                    <p>Древесина для строительных и декоративных нужд.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default ProductCards;

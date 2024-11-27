import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTree, FaTruck, FaSmile, FaCity } from 'react-icons/fa';

const StatisticsSection: React.FC = () => {
    const [treesSold, setTreesSold] = useState(0);
    const [deliveriesMade, setDeliveriesMade] = useState(0);
    const [happyClients, setHappyClients] = useState(0);
    const [citiesCovered, setCitiesCovered] = useState(0);

    useEffect(() => {
        const incrementTrees = setInterval(() => {
            setTreesSold((prev) => (prev < 1000 ? prev + 10 : prev));
        }, 50);

        const incrementDeliveries = setInterval(() => {
            setDeliveriesMade((prev) => (prev < 200 ? prev + 2 : prev));
        }, 50);

        const incrementClients = setInterval(() => {
            setHappyClients((prev) => (prev < 500 ? prev + 5 : prev));
        }, 50);

        const incrementCities = setInterval(() => {
            setCitiesCovered((prev) => (prev < 50 ? prev + 1 : prev));
        }, 100);

        return () => {
            clearInterval(incrementTrees);
            clearInterval(incrementDeliveries);
            clearInterval(incrementClients);
            clearInterval(incrementCities);
        };
    }, []);

    const blockVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="mt-16 bg-gradient-to-br from-forest-green to-light-green py-16 text-white">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Наши достижения</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {/* Блок: Продано елей */}
                <motion.div
                    className="flex flex-col items-center bg-dark-bg p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
                    variants={blockVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <FaTree className="text-6xl mb-4 text-primary" />
                    <div className="text-6xl font-extrabold">{treesSold}+</div>
                    <div className="text-lg md:text-xl mt-2">Продано елей</div>
                </motion.div>

                {/* Блок: Рейсов доставки */}
                <motion.div
                    className="flex flex-col items-center bg-dark-bg p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
                    variants={blockVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <FaTruck className="text-6xl mb-4 text-secondary" />
                    <div className="text-6xl font-extrabold">{deliveriesMade}+</div>
                    <div className="text-lg md:text-xl mt-2">Рейсов доставки</div>
                </motion.div>

                {/* Блок: Довольных клиентов */}
                <motion.div
                    className="flex flex-col items-center bg-dark-bg p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
                    variants={blockVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <FaSmile className="text-6xl mb-4 text-yellow-400" />
                    <div className="text-6xl font-extrabold">{happyClients}+</div>
                    <div className="text-lg md:text-xl mt-2">Довольных клиентов</div>
                </motion.div>

                {/* Блок: Городов доставки */}
                <motion.div
                    className="flex flex-col items-center bg-dark-bg p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
                    variants={blockVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                >
                    <FaCity className="text-6xl mb-4 text-blue-400" />
                    <div className="text-6xl font-extrabold">{citiesCovered}+</div>
                    <div className="text-lg md:text-xl mt-2">Городов доставки</div>
                </motion.div>
            </div>
        </div>
    );
};

export default StatisticsSection;

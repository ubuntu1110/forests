import React from 'react';
import { motion } from 'framer-motion';

const cityRoutes = [
    { city: 'Минск', deliveries: 15 },
    { city: 'Москва', deliveries: 20 },
    { city: 'Бишкек', deliveries: 10 },
    { city: 'Алматы', deliveries: 8 },
];

const RoutesStats: React.FC = () => {
    return (
        <div className="p-8 bg-gradient-to-br from-light-green to-forest-green rounded-lg shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
                Рейсы доставки по городам
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cityRoutes.map((route, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <h3 className="text-xl font-bold text-dark-bg mb-2">{route.city}</h3>
                        <p className="text-lg text-dark-bg">
                            Количество рейсов: <span className="font-bold">{route.deliveries}</span>
                        </p>
                        <div className="mt-4 h-2 bg-light-green rounded-full">
                            <motion.div
                                className="h-2 bg-secondary rounded-full"
                                style={{ width: `${(route.deliveries / 20) * 100}%` }}
                                initial={{ width: 0 }}
                                animate={{ width: `${(route.deliveries / 20) * 100}%` }}
                                transition={{ duration: 1 }}
                            ></motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default RoutesStats;

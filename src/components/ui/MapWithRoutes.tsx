import React from 'react';
import { motion } from 'framer-motion';

const cities = [
    { name: 'Минск', coords: [53.9006, 27.5590], deliveries: 20 },
    { name: 'Москва', coords: [55.7558, 37.6173], deliveries: 30 },
    { name: 'Бишкек', coords: [42.8746, 74.5698], deliveries: 10 },
    { name: 'Алматы', coords: [43.2389, 76.8897], deliveries: 15 },
];

const routes = [
    { from: 'Минск', to: 'Москва', deliveries: 20 },
    { from: 'Москва', to: 'Бишкек', deliveries: 30 },
    { from: 'Бишкек', to: 'Алматы', deliveries: 10 },
];

const RouteVisualizer: React.FC = () => {
    return (
        <div className="p-8 bg-gradient-to-br from-light-green to-forest-green text-dark-bg rounded-lg shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">Маршруты доставки</h2>
            <div className="space-y-4">
                {routes.map((route, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div>
                            <h3 className="text-lg font-bold">
                                {route.from} → {route.to}
                            </h3>
                            <p className="text-sm text-gray-600">
                                Количество рейсов: <span className="font-bold">{route.deliveries}</span>
                            </p>
                        </div>
                        <motion.div
                            className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-white text-xl font-bold"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 1 }}
                        >
                            {route.deliveries}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
            <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Города</h3>
                <ul className="grid grid-cols-2 gap-4">
                    {cities.map((city, index) => (
                        <motion.li
                            key={index}
                            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h4 className="font-bold text-lg">{city.name}</h4>
                            <p className="text-sm text-gray-600">
                                Доставки: <span className="font-bold">{city.deliveries}</span>
                            </p>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RouteVisualizer;

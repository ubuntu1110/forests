import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

const testimonialsData = [
    {
        name: 'Иван Иванов',
        review: 'Купил ель для нового года, и остался очень доволен. Качество дерева и доставка на высшем уровне!',
        city: 'Минск',
    },
    {
        name: 'Мария Петрова',
        review: 'Лучшее место для покупки елей. Быстро, удобно, экологично!',
        city: 'Москва',
    },
    {
        name: 'Дмитрий Сидоров',
        review: 'Отличное обслуживание, прекрасное дерево. Спасибо за быструю доставку!',
        city: 'Астана',
    },
    {
        name: 'Анна Смирнова',
        review: 'Удивительно высокий уровень сервиса! Очень рекомендую.',
        city: 'Санкт-Петербург',
    },
    {
        name: 'Екатерина Орлова',
        review: 'Нашла идеальную ель для праздника. Быстрая доставка и отличное качество!',
        city: 'Алматы',
    },
    {
        name: 'Сергей Кузнецов',
        review: 'Порадовала экологичность и доступные цены. Все четко и без проблем.',
        city: 'Ташкент',
    },
];

const TestimonialsSection: React.FC = () => {
    return (
        <section className="p-8 bg-gradient-to-br from-light-green to-forest-green text-dark-bg rounded-lg shadow-lg">
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold text-white mb-4">Отзывы клиентов</h1>
                <p className="text-lg md:text-xl text-light-green">
                    Читайте, что говорят наши клиенты из разных уголков мира.
                </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {testimonialsData.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex items-center mb-4">
                            <FaMapMarkerAlt className="text-primary text-lg mr-2" />
                            <span className="font-semibold text-dark-bg">{testimonial.city}</span>
                        </div>
                        <p className="italic text-dark-text mb-4">"{testimonial.review}"</p>
                        <h3 className="text-lg font-bold text-forest-green">- {testimonial.name}</h3>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;

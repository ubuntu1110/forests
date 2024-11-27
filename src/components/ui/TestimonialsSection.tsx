import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const testimonials = [
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
];

const TestimonialsSection: React.FC = () => {
    return (
        <div className="py-16 bg-gradient-to-br from-light-green to-forest-green text-white">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                Отзывы наших клиентов
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="relative bg-white text-dark-bg rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-shadow"
                    >
                        {/* Анимационные кавычки */}
                        <FaQuoteLeft className="text-2xl text-primary absolute top-4 left-4 opacity-40" />
                        <FaQuoteRight className="text-2xl text-primary absolute bottom-4 right-4 opacity-40" />

                        {/* Текст отзыва */}
                        <p className="italic text-center mb-6">
                            "{testimonial.review}"
                        </p>

                        {/* Информация о клиенте */}
                        <div className="text-center mt-auto">
                            <p className="font-bold text-xl">{testimonial.name}</p>
                            <p className="text-sm text-gray-600">{testimonial.city}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialsSection;

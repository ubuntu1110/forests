import React, { useState } from 'react';

interface RecruitmentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const RecruitmentModal: React.FC<RecruitmentModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.phone || !formData.message) {
            alert('Пожалуйста, заполните все поля!');
            return;
        }

        // Отправка данных в Telegram-бота
        try {
            const telegramToken = 'YOUR_TELEGRAM_BOT_TOKEN'; // Замените на ваш токен
            const chatId = 'YOUR_CHAT_ID'; // Замените на ваш chat_id
            const messageToSend = `
📄 *Новая заявка на работу*:
- 👤 Имя: ${formData.name}
- 📧 Email: ${formData.email}
- 📞 Телефон: ${formData.phone}
- 📝 Сообщение: ${formData.message}
            `;

            await fetch(
                `https://api.telegram.org/bot${telegramToken}/sendMessage`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: messageToSend,
                        parse_mode: 'Markdown',
                    }),
                }
            );

            setIsSubmitted(true);
        } catch (error) {
            alert('Произошла ошибка при отправке заявки. Попробуйте позже.');
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={onClose} // Закрытие при клике вне формы
        >
            <div
                className="bg-dark-bg text-light-green p-6 rounded-lg shadow-lg relative"
                onClick={(e) => e.stopPropagation()} // Остановка закрытия при клике на форму
            >
                {isSubmitted ? (
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4">Спасибо за вашу заявку!</h2>
                        <p>Мы свяжемся с вами в ближайшее время.</p>
                        <button
                            className="mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition"
                            onClick={onClose}
                        >
                            Закрыть
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-2xl font-bold mb-4">Заполните форму</h2>
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-2">Имя</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block mb-2">Телефон</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block mb-2">Сообщение</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition"
                        >
                            Отправить резюме
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default RecruitmentModal;

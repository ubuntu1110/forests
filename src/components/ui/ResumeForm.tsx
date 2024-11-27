import React, { useState } from 'react';

const ResumeForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { name, email, phone, message } = formData;

        if (!name || !email || !phone || !message) {
            setError('Пожалуйста, заполните все поля.');
            return;
        }

        try {
            const telegramToken = 'YOUR_TELEGRAM_BOT_TOKEN'; // Замените на ваш токен
            const chatId = 'YOUR_CHAT_ID'; // Замените на ваш chat_id
            const messageToSend = `
📄 *Новая заявка на работу*:
- 👤 Имя: ${name}
- 📧 Email: ${email}
- 📞 Телефон: ${phone}
- 📝 Сообщение: ${message}
            `;

            const response = await fetch(
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

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ name: '', email: '', phone: '', message: '' });
                setError('');
            } else {
                setError('Произошла ошибка при отправке. Попробуйте еще раз.');
            }
        } catch (error) {
            setError('Не удалось отправить заявку. Попробуйте позже.');
        }
    };

    if (isSubmitted) {
        return (
            <div className="p-8 bg-light-green text-dark-bg rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Спасибо за вашу заявку!</h2>
                <p>Мы свяжемся с вами в ближайшее время.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="p-8 bg-dark-bg text-light-green rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Заполните форму</h2>
            {error && <div className="mb-4 text-red-500">{error}</div>}
            <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Имя</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
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
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
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
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block mb-2">Сообщение</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition-all"
            >
                Отправить резюме
            </button>
        </form>
    );
};

export default ResumeForm;

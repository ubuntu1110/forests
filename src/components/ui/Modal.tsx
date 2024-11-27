import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

interface ModalProps {
    onClose: () => void;
    vacancy?: string; // Свойство сделано необязательным
}

const Modal: React.FC<ModalProps> = ({ onClose, vacancy }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        country: '',
        messenger: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        fullName: false,
        phone: false,
        messenger: false,
        message: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const determineCountry = (phone: string) => {
        if (phone.startsWith('+375')) return 'Беларусь';
        if (phone.startsWith('+7') && (phone[2] === '6' || phone[2] === '7')) return 'Казахстан';
        if (phone.startsWith('+7')) return 'Россия';
        if (phone.startsWith('+996')) return 'Киргизия';
        if (phone.startsWith('+998')) return 'Узбекистан';
        return 'Неизвестная страна';
    };

    const handlePhoneChange = (value: string) => {
        const country = determineCountry(value);
        setFormData({ ...formData, phone: value, country });
        setErrors({ ...errors, phone: false });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: false });
    };

    const validateForm = () => {
        const newErrors = {
            fullName: !formData.fullName.trim(),
            phone: !/^\+\d{1,3}\s?\(?\d{1,3}\)?\s?\d{3}[-.\s]?\d{2}[-.\s]?\d{2}$/.test(formData.phone),
            messenger: !formData.messenger,
            message: !formData.message.trim(),
        };

        setErrors(newErrors);
        return !Object.values(newErrors).some((error) => error);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            toast.error('Пожалуйста, заполните все поля корректно!');
            return;
        }

        setIsSubmitting(true);
        try {
            const telegramToken = 'YOUR_TELEGRAM_TOKEN'; // Замените на ваш токен
            const chatId = 'YOUR_CHAT_ID'; // Замените на ваш chat_id
            const messageToSend = `
📄 *Новая заявка на вакансию "${vacancy || 'Не указана'}"*:
- 👤 ФИО: ${formData.fullName}
- 📞 Телефон: ${formData.phone}
- 🌍 Страна: ${formData.country}
- 💬 Мессенджер: ${formData.messenger}
- 📝 Сообщение: ${formData.message}
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
                toast.success('Заявка успешно отправлена!');
                setFormData({ fullName: '', phone: '', country: '', messenger: '', message: '' });
                setTimeout(onClose, 2000);
            } else {
                toast.error('Произошла ошибка при отправке. Попробуйте позже.');
            }
        } catch (error) {
            toast.error('Не удалось отправить заявку. Проверьте соединение.');
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
            onClick={onClose}
        >
            <Toaster />
            <div
                className="bg-dark-bg text-light-green p-6 rounded-lg shadow-lg w-full max-w-lg relative"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-2xl font-bold mb-4">
                    {vacancy ? `Отклик на вакансию: ${vacancy}` : 'Заполните форму'}
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="fullName" className="block mb-2">ФИО</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 rounded-lg bg-gray-800 text-white ${errors.fullName ? 'border border-red-500' : ''}`}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phone" className="block mb-2">Телефон</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={(e) => handlePhoneChange(e.target.value)}
                            placeholder="+375 (XX) XXX-XX-XX"
                            className={`w-full px-4 py-2 rounded-lg bg-gray-800 text-white ${errors.phone ? 'border border-red-500' : ''}`}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="messenger" className="block mb-2">Мессенджер</label>
                        <select
                            id="messenger"
                            name="messenger"
                            value={formData.messenger}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 rounded-lg bg-gray-800 text-white ${errors.messenger ? 'border border-red-500' : ''}`}
                        >
                            <option value="">Выберите...</option>
                            <option value="WhatsApp">WhatsApp</option>
                            <option value="Telegram">Telegram</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block mb-2">Сообщение</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 rounded-lg bg-gray-800 text-white ${errors.message ? 'border border-red-500' : ''}`}
                        />
                    </div>

                    <button
                        type="submit"
                        className={`bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Обработка...' : 'Отправить резюме'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Modal;

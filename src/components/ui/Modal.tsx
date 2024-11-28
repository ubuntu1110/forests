import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

interface ModalProps {
    onClose: () => void;
    vacancy?: string;
}

const Modal: React.FC<ModalProps> = ({ onClose, vacancy }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        country: '',
        messenger: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('http://localhost:5000/api/send-application', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, vacancy }),
            });

            if (response.ok) {
                toast.success('Заявка успешно отправлена!');
                setFormData({ fullName: '', phone: '', country: '', messenger: '', message: '' });
                setTimeout(onClose, 2000);
            } else {
                const errorText = await response.text();
                console.error('Ошибка:', errorText);
                toast.error('Произошла ошибка при отправке.');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            toast.error('Не удалось отправить заявку. Проверьте соединение.');
        } finally {
            setIsSubmitting(false);
        }
    };

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
                            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block mb-2">Телефон</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="messenger" className="block mb-2">Мессенджер</label>
                        <select
                            id="messenger"
                            name="messenger"
                            value={formData.messenger}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white"
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
                            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Modal;

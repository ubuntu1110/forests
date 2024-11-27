import React, { useState } from 'react';
import Modal from '../ui/Modal';

const Contact: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="p-8 bg-light-green text-dark-bg">
            <h1 className="text-4xl font-bold mb-8 text-center">Контакты</h1>

            {/* Информация о компании */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-4">О компании</h2>
                <p className="mb-4 text-lg">
                    Мы гордимся тем, что являемся ведущими производителями экологически чистых елей
                    и предлагаем услуги высочайшего качества по доставке и поддержке клиентов.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">Наши контакты</h3>
                        <p>
                            📍 Юридический адрес: <br />
                            Минск, ул. Лесная, 15.
                        </p>
                        <p>
                            📞 Телефон: <a href="tel:+375291234567" className="text-primary">+375 (29) 123-45-67</a>
                        </p>
                        <p>
                            ✉️ Email: <a href="mailto:info@winterforests.com" className="text-primary">info@winterforests.com</a>
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">Реквизиты</h3>
                        <p>ООО «Зимний Лес»</p>
                        <p>УНП: 202455789</p>
                        <p>Банковские реквизиты: IBAN BY00UNBS00000000012345</p>
                    </div>
                </div>
            </section>

            {/* Кнопка для открытия формы */}
            <section className="mb-12 text-center">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition"
                >
                    Написать нам
                </button>
            </section>

            {/* Карта */}
            <section>
                <h2 className="text-3xl font-semibold mb-4">Как нас найти</h2>
                <div className="w-full h-96 bg-gray-200 rounded-lg shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.57437043087!2d27.42153847457401!3d53.89300945569243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfa54a07bf85%3A0x85b5da0fa3f85d4c!2sBelarus!5e0!3m2!1sen!2sus!4v1691948292345!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        allowFullScreen
                        loading="lazy"
                        title="Карта"
                        style={{ border: 0 }}
                    ></iframe>
                </div>
            </section>

            {/* Модальное окно */}
            {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
        </div>
    );
};

export default Contact;

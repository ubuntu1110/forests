import React, { useState } from 'react';
import Modal from './Modal';
import { FaBriefcase, FaDollarSign } from 'react-icons/fa';

const vacancies = [
    {
        title: 'Менеджер по продажам',
        description: 'Работа с клиентами, обработка заказов, консультация. Высокий доход от продаж.',
        salary: '$300 - $500 в день',
        conditions: [
            'Опыт работы в продажах приветствуется',
            'Гибкий график работы',
            'Работа удалённо или в офисе',
        ],
    },
    {
        title: 'Логист',
        description: 'Организация и контроль доставки елей по городам Беларуси, России и СНГ.',
        salary: '$150 - $200 в день',
        conditions: [
            'Опыт работы в логистике обязателен',
            'Работа с транспортными компаниями',
            'График работы: 5/2',
        ],
    },
    {
        title: 'Упаковщик',
        description: 'Подготовка елей к доставке, контроль качества и упаковка.',
        salary: '$100 - $150 в день',
        conditions: [
            'Без опыта работы',
            'График: 2/2 или 5/2',
            'Работа на складе',
        ],
    },
    {
        title: 'Водитель-экспедитор',
        description: 'Доставка елей клиентам, работа с документами и поддержание автомобиля в исправном состоянии.',
        salary: '$200 - $300 в день',
        conditions: [
            'Наличие категории B или выше',
            'Опыт работы от 1 года',
            'График: 6/1',
        ],
    },
    {
        title: 'Маркетолог',
        description: 'Разработка и реализация рекламных кампаний для продвижения продукции.',
        salary: '$400 - $600 в день',
        conditions: [
            'Опыт работы в маркетинге обязателен',
            'Знание инструментов интернет-маркетинга',
            'Удалённая работа',
        ],
    },
    {
        title: 'Складской рабочий',
        description: 'Работа на складе: приём, размещение и выдача елей.',
        salary: '$120 - $180 в день',
        conditions: [
            'Без опыта работы',
            'График: 2/2',
            'Обеспечение спецодеждой',
        ],
    },
];

const VacanciesSection: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVacancy, setSelectedVacancy] = useState<string | null>(null);

    const openModal = (vacancy: string) => {
        setSelectedVacancy(vacancy);
        setIsModalOpen(true);
    };

    return (
        <div className="py-16 bg-gradient-to-br from-light-green to-forest-green text-dark-bg">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
                Актуальные вакансии
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
                {vacancies.map((vacancy, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg p-6 flex flex-col hover:shadow-2xl transition-shadow"
                    >
                        {/* Название вакансии */}
                        <h3 className="text-2xl font-bold mb-4 text-forest-green">
                            <FaBriefcase className="inline mr-2" />
                            {vacancy.title}
                        </h3>

                        {/* Описание */}
                        <p className="text-gray-700 mb-4">{vacancy.description}</p>

                        {/* Зарплата */}
                        <div className="mb-4">
                            <span className="text-xl font-bold text-primary">
                                <FaDollarSign className="inline mr-2" />
                                {vacancy.salary}
                            </span>
                        </div>

                        {/* Условия работы */}
                        <ul className="text-sm text-gray-600 list-disc ml-4 mb-6">
                            {vacancy.conditions.map((condition, i) => (
                                <li key={i}>{condition}</li>
                            ))}
                        </ul>

                        {/* Кнопка отклика */}
                        <button
                            onClick={() => openModal(vacancy.title)}
                            className="mt-auto bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition"
                        >
                            Откликнуться
                        </button>
                    </div>
                ))}
            </div>

            {/* Модальное окно */}
            {isModalOpen && (
                <Modal
                    onClose={() => setIsModalOpen(false)}
                    vacancy={selectedVacancy || ''}
                />
            )}
        </div>
    );
};

export default VacanciesSection;

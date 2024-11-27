import React, { useState, useEffect } from 'react';

type Employee = {
    name: string;
    points: number;
};

const ContestPage: React.FC = () => {
    const [data, setData] = useState<{
        totalCollected: number;
        goal: number;
        employees: Employee[];
        timeLeft: number;
    }>({
        totalCollected: 0,
        goal: 750000,
        employees: [],
        timeLeft: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/api/contest-data');
            const result = await response.json();
            setData(result);
        };

        fetchData();
        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    }, []);

    const timeLeft = new Date(data.timeLeft);
    const days = Math.floor(data.timeLeft / (1000 * 60 * 60 * 24));
    const hours = timeLeft.getUTCHours();
    const minutes = timeLeft.getUTCMinutes();

    const progress = Math.min((data.totalCollected / data.goal) * 100, 100);

    return (
        <div className="p-8 bg-light-green text-dark-bg">
            <h1 className="text-4xl font-bold mb-8 text-center">Новогодняя акция</h1>
            <p className="mb-6 text-lg text-center">
                Мы собираем средства, чтобы разыграть между нашими сотрудниками. Присоединяйтесь!
            </p>
            <div className="bg-gray-200 rounded-lg p-4 shadow-lg mb-8">
                <h2 className="text-2xl font-semibold mb-4">Прогресс акции:</h2>
                <div className="relative h-6 bg-gray-300 rounded-full overflow-hidden">
                    <div
                        className="absolute top-0 left-0 h-full bg-primary transition-all"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <p className="mt-4 text-center font-bold text-lg">
                    {data.totalCollected.toLocaleString('ru-RU')} ₽ из {data.goal.toLocaleString('ru-RU')} ₽
                </p>
                <p className="text-center mt-2">Осталось: {days} дней, {hours} часов, {minutes} минут</p>
            </div>
            <h2 className="text-2xl font-bold text-center mb-4">Топ сотрудников:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.employees.map((employee, index) => (
                    <div
                        key={index}
                        className={`p-4 rounded-lg shadow-lg ${index < 3 ? 'bg-gold' : 'bg-white'}`}
                    >
                        <h3 className="font-bold text-xl">{employee.name}</h3>
                        <p>{employee.points} баллов</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContestPage;

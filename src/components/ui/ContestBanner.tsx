import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type Employee = {
    name: string;
    points: number;
};

const ContestBanner: React.FC = () => {
    const navigate = useNavigate();
    const [data, setData] = useState<{
        totalCollected: number;
        employees: Employee[];
    }>({
        totalCollected: 0,
        employees: [],
    });

    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_URL}/api/contest-data`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        fetchData();
        const intervalId = setInterval(fetchData, 5000);
        return () => clearInterval(intervalId);
    }, [API_URL]);

    return (
        <div className="bg-gradient-to-r from-light-green to-dark-bg text-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Участвуйте в нашем новогоднем конкурсе!</h2>
            <p className="mb-4 text-lg">
                Мы разыграем собранную сумму (более <span className="font-bold">500 000 рублей</span>)
                между нашими лучшими сотрудниками. Присоединяйтесь и следите за прогрессом!
            </p>
            <p className="mb-6 text-lg">Собрано: {data.totalCollected.toLocaleString()} ₽</p>
            <div className="flex justify-center space-x-4 mb-6">
                {data.employees.slice(0, 3).map((employee, index) => (
                    <div key={index} className="bg-white text-dark-bg p-4 rounded-lg shadow">
                        <h3 className="text-lg font-bold">{employee.name}</h3>
                        <p>{employee.points} баллов</p>
                    </div>
                ))}
            </div>
            <button
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition"
                onClick={() => navigate('/contest')}
            >
                Принять участие
            </button>
        </div>
    );
};

export default ContestBanner;

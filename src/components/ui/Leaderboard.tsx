import React, { useEffect, useState } from 'react';

const Leaderboard: React.FC = () => {
    const [employees, setEmployees] = useState([
        { id: 1, name: 'Алексей Смирнов', points: 0 },
        { id: 2, name: 'Мария Иванова', points: 0 },
        { id: 3, name: 'Дмитрий Кузнецов', points: 0 },
        { id: 4, name: 'Екатерина Соколова', points: 0 },
        { id: 5, name: 'Иван Морозов', points: 0 },
        { id: 6, name: 'Ольга Лебедева', points: 0 },
        { id: 7, name: 'Павел Воробьев', points: 0 },
        { id: 8, name: 'Анна Куликова', points: 0 },
        { id: 9, name: 'Виктор Петров', points: 0 },
        { id: 10, name: 'Светлана Васильева', points: 0 },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setEmployees((prevEmployees) =>
                prevEmployees
                    .map((employee) => ({
                        ...employee,
                        points: employee.points + Math.floor(Math.random() * 10),
                    }))
                    .sort((a, b) => b.points - a.points)
            );
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-8 bg-light-green text-dark-bg">
            <h2 className="text-3xl font-bold text-center mb-4">Топ сотрудников:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {employees.map((employee, index) => (
                    <div
                        key={employee.id}
                        className="p-4 bg-white shadow-md rounded-lg flex justify-between items-center"
                    >
                        <span className="font-semibold">
                            {index + 1}. {employee.name}
                        </span>
                        <span className="text-primary font-bold">{employee.points} баллов</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Leaderboard;

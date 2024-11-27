const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

let totalCollected = 0; // Начальная сумма
const goal = 750000; // Целевая сумма
const newYearTimestamp = new Date(new Date().getFullYear() + 1, 0, 1).getTime(); // Новый год
let employees = [];

// Имена сотрудников
const employeeNames = [
    'Алексей Иванов', 'Мария Петрова', 'Иван Смирнов', 'Ольга Сидорова', 'Дмитрий Кузнецов',
    'Анна Васильева', 'Екатерина Фёдорова', 'Сергей Морозов', 'Татьяна Белова', 'Николай Воронов'
];

// Инициализация сотрудников
employees = employeeNames.map(name => ({
    name,
    points: Math.floor(Math.random() * 100),
}));

// Рассчитываем, сколько нужно добавлять каждую секунду
const calculateIncrement = () => {
    const now = Date.now();
    const remainingTime = (newYearTimestamp - now) / 1000; // В секундах
    if (remainingTime <= 0) return 0; // Новый год наступил
    return (goal - totalCollected) / remainingTime;
};

// Обновляем сумму и баллы сотрудников каждые 10 секунд
setInterval(() => {
    const increment = calculateIncrement();
    totalCollected = Math.min(totalCollected + increment * 10, goal);

    employees.forEach(employee => {
        employee.points += Math.floor(Math.random() * 10); // Добавляем случайное число баллов
    });

    // Сортируем сотрудников по количеству баллов
    employees.sort((a, b) => b.points - a.points);
}, 10000);

// Endpoint для получения текущих данных акции
app.get('/api/contest-data', (req, res) => {
    const now = Date.now();
    const timeLeft = Math.max(newYearTimestamp - now, 0); // Время до Нового года в миллисекундах

    res.json({
        totalCollected: Math.floor(totalCollected),
        goal,
        employees,
        timeLeft,
    });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

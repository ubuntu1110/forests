import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

let totalCollected = 0;
const goal = 750000;
const newYearTimestamp = new Date(new Date().getFullYear() + 1, 0, 1).getTime();
let employees = [];

const employeeNames = [
    'Алексей Иванов', 'Мария Петрова', 'Иван Смирнов', 'Ольга Сидорова', 'Дмитрий Кузнецов',
    'Анна Васильева', 'Екатерина Фёдорова', 'Сергей Морозов', 'Татьяна Белова', 'Николай Воронов'
];

employees = employeeNames.map(name => ({
    name,
    points: Math.floor(Math.random() * 100),
}));

const calculateIncrement = () => {
    const now = Date.now();
    const remainingTime = (newYearTimestamp - now) / 1000;
    if (remainingTime <= 0) return 0;
    return (goal - totalCollected) / remainingTime;
};

setInterval(() => {
    const increment = calculateIncrement();
    totalCollected = Math.min(totalCollected + increment * 10, goal);

    employees.forEach(employee => {
        employee.points += Math.floor(Math.random() * 10);
    });

    employees.sort((a, b) => b.points - a.points);
}, 10000);

app.get('/api/contest-data', (req, res) => {
    const now = Date.now();
    const timeLeft = Math.max(newYearTimestamp - now, 0);

    res.json({
        totalCollected: Math.floor(totalCollected),
        goal,
        employees,
        timeLeft,
    });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

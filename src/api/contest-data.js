// Начальная сумма и цель
let totalCollected = 0;
const goal = 750000; // Целевая сумма до Нового года
const newYearTimestamp = new Date(new Date().getFullYear() + 1, 0, 1).getTime(); // Время Нового года

// Список сотрудников
let employees = [];
const employeeNames = [
    'Алексей Иванов', 'Мария Петрова', 'Иван Смирнов', 'Ольга Сидорова', 'Дмитрий Кузнецов',
    'Анна Васильева', 'Екатерина Фёдорова', 'Сергей Морозов', 'Татьяна Белова', 'Николай Воронов'
];

// Инициализация сотрудников
employees = employeeNames.map(name => ({
    name,
    points: Math.floor(Math.random() * 100), // Случайные начальные баллы
}));

// Функция для вычисления увеличения суммы
const calculateIncrement = () => {
    const now = Date.now();
    const remainingTime = (newYearTimestamp - now) / 1000; // Время до Нового года в секундах
    if (remainingTime <= 0) return 0; // Если Новый год уже наступил
    return (goal - totalCollected) / remainingTime; // Расчет суммы за секунду
};

// Интервал обновления данных (каждые 10 секунд)
setInterval(() => {
    const increment = calculateIncrement();
    totalCollected = Math.min(totalCollected + increment * 10, goal); // Увеличиваем общую сумму

    // Увеличиваем баллы сотрудников
    employees.forEach(employee => {
        employee.points += Math.floor(Math.random() * 10); // Добавляем случайные баллы
    });

    // Сортируем сотрудников по количеству баллов
    employees.sort((a, b) => b.points - a.points);
}, 10000); // Обновляем каждые 10 секунд

// API-обработчик для Vercel
export default function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' }); // Разрешаем только GET-запросы
    }

    const now = Date.now();
    const timeLeft = Math.max(newYearTimestamp - now, 0); // Время до Нового года в миллисекундах

    // Отправляем текущие данные в ответ
    res.status(200).json({
        totalCollected: Math.floor(totalCollected),
        goal,
        employees,
        timeLeft,
    });
}

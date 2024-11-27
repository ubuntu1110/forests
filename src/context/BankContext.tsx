import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface BankContextType {
    totalCollected: number;
    goal: number;
}

const BankContext = createContext<BankContextType | undefined>(undefined);

export const BankProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [totalCollected, setTotalCollected] = useState(0);
    const goal = 750000;

    // Функция для получения данных с сервера
    const fetchTotalCollected = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/totalCollected');
            const data = await response.json();
            setTotalCollected(data.totalCollected);
        } catch (error) {
            console.error('Ошибка при получении данных:', error);
        }
    };

    useEffect(() => {
        fetchTotalCollected(); // Первоначальная загрузка
        const interval = setInterval(fetchTotalCollected, 10000); // Обновление каждые 10 секунд

        return () => clearInterval(interval);
    }, []);

    return (
        <BankContext.Provider value={{ totalCollected, goal }}>
            {children}
        </BankContext.Provider>
    );
};

export const useBank = () => {
    const context = useContext(BankContext);
    if (!context) {
        throw new Error('useBank must be used within a BankProvider');
    }
    return context;
};

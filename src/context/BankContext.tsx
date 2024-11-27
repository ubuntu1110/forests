import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface BankContextType {
    totalCollected: number;
    goal: number;
}

const BankContext = createContext<BankContextType | undefined>(undefined);

export const BankProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [totalCollected, setTotalCollected] = useState<number>(0);
    const goal = 750000;

    // Функция для получения данных с сервера
    const fetchTotalCollected = async () => {
        try {
            const response = await fetch('/api/contest-data');

            if (!response.ok) {
                throw new Error(`Ошибка сети: ${response.status}`);
            }

            const responseText = await response.text();  // Читаем ответ как текст

            console.log('Response text:', responseText);  // Логируем для отладки

            // Проверяем, если это HTML
            if (responseText.startsWith('<!DOCTYPE html>')) {
                // Это HTML-страница. Попробуем извлечь из нее данные.
                const jsonString = extractJSONFromHTML(responseText);
                const result = JSON.parse(jsonString);  // Преобразуем извлеченный текст в JSON
                setTotalCollected(result.totalCollected);
            } else {
                // Если это JSON, просто преобразуем его
                const result = JSON.parse(responseText); // Преобразуем текст в JSON
                setTotalCollected(result.totalCollected);
            }
        } catch (error) {
            console.error('Ошибка при получении данных:', error);
        }
    };

    // Функция для извлечения JSON из HTML
    const extractJSONFromHTML = (html: string): string => {
        const match = html.match(/<script id="contest-data">(.+?)<\/script>/);
        if (match && match[1]) {
            return match[1];  // Возвращаем извлеченный JSON
        }
        throw new Error('Не удалось извлечь JSON из HTML');
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

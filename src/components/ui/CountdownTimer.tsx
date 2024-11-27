import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
    const calculateTimeLeft = () => {
        const year = new Date().getFullYear();
        const difference = +new Date(`January 1, ${year + 1} 00:00:00`) - +new Date();
        let timeLeft: { [key: string]: number } = {};

        if (difference > 0) {
            timeLeft = {
                'Дни': Math.floor(difference / (1000 * 60 * 60 * 24)),
                'Часы': Math.floor((difference / (1000 * 60 * 60)) % 24),
                'Минуты': Math.floor((difference / 1000 / 60) % 60),
                'Секунды': Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative flex flex-wrap justify-center items-center space-x-4 p-6 bg-gradient-to-br from-light-green to-dark-bg rounded-lg shadow-2xl">
            {/* Карточки времени */}
            {Object.entries(timeLeft).length > 0 ? (
                Object.entries(timeLeft).map(([key, value]) => (
                    <div
                        key={key}
                        className="flex flex-col items-center justify-center bg-white text-dark-bg rounded-lg shadow-lg w-24 h-28 md:w-28 md:h-32 lg:w-32 lg:h-36 mx-2 transition-transform transform hover:scale-105"
                    >
                        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                            {value}
                        </div>
                        <div className="text-sm md:text-base lg:text-lg font-medium uppercase">
                            {key}
                        </div>
                    </div>
                ))
            ) : (
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                    С Новым годом!
                </span>
            )}

            {/* PNG с Дедом Морозом */}
            <img
                src={require('../../assets/Remove-bg.ai_1732636937213.png')}
                alt="Дед Мороз"
                className="absolute right-4 bottom-4 w-32 md:w-40 lg:w-48"
            />
        </div>
    );
};

export default CountdownTimer;

import React from 'react';
import Snowfall from 'react-snowfall';

const SnowfallEffect: React.FC = () => {
    const snowflakeColors = ['#ffffff', '#cce7ff', '#e3f2fd']; // Оттенки белого и голубого

    return (
        <div className="relative w-full h-full bg-gradient-to-b from-dark-blue to-light-blue overflow-hidden">
            <Snowfall
                color={snowflakeColors[Math.floor(Math.random() * snowflakeColors.length)]}
                snowflakeCount={200}
                style={{
                    zIndex: 10,
                }}
                radius={[0.5, 3]} // Размер снежинок
                speed={[0.5, 1.5]} // Скорость снежинок
                wind={[0.2, 1.0]} // Эффект ветра
            />
        </div>
    );
};

export default SnowfallEffect;

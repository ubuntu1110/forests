import React from 'react';
import HeroSection from '../../components/ui/HeroSection';
import InfoBlock from '../../components/ui/InfoBlock';
import FeatureItem from '../../components/ui/FeatureItem';
import CountdownTimer from '../../components/ui/CountdownTimer';
import StatisticsSection from '../../components/ui/StatisticsSection';
import SnowfallEffect from '../../components/ui/SnowfallEffect';
import CallToAction from '../../components/ui/CallToAction';
import RecruitmentParallax from '../../components/ui/RecruitmentParallax';
import TestimonialsSection from '../../components/ui/TestimonialsSection';
import VacanciesSection from '../../components/ui/VacanciesSection'; // Импорт вакансий
import ContestBanner from '../../components/ui/ContestBanner'; // Новый компонент
import Navbar from '../../components/ui/Navbar';
import { HERO_SECTION, INFO_BLOCKS, FEATURES, CALL_TO_ACTION } from '../../constants/texts';

const Home: React.FC = () => {
    return (
        <div className="bg-dark-bg text-dark-text relative overflow-hidden">
            {/* Навбар */}
            <Navbar />

            {/* Эффект снега */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-50">
                <SnowfallEffect />
            </div>

            {/* Герой секция */}
            <HeroSection
                title={HERO_SECTION.title}
                subtitle={HERO_SECTION.subtitle}
                buttonText={HERO_SECTION.buttonText}
                backgroundImage={require('../../assets/hero-newyear.webp')}
            />

            {/* Таймер до Нового года */}
            <div className="py-8">
                <h2 className="text-4xl font-bold text-center mb-4 text-light-green">
                    До Нового года осталось
                </h2>
                <CountdownTimer />
            </div>

            {/* Секция с конкурсом */}
            <div className="py-8">
                <ContestBanner />
            </div>

            {/* Секция параллакса с текстом */}
            <RecruitmentParallax />

            {/* Блоки с информацией */}
            <div className="p-8">
                <h2 className="text-4xl font-bold text-center mb-8 text-light-green">
                    О нас
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {INFO_BLOCKS.map((block, index) => (
                        <InfoBlock key={index} image={block.image} title={block.title} text={block.text} />
                    ))}
                </div>
            </div>

            {/* Секция статистики */}
            <StatisticsSection />

            {/* Секция отзывов */}
            <TestimonialsSection />

            {/* Секция вакансий */}
            <VacanciesSection />

            {/* Секция с преимуществами */}
            <div className="mt-16 p-8">
                <h2 className="text-4xl font-bold text-center mb-8 text-light-green">
                    Почему выбирают нас
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {FEATURES.map((feature, index) => (
                        <FeatureItem
                            key={index}
                            image={feature.image}
                            title={feature.title}
                            text={feature.text}
                            initialX={index % 2 === 0 ? -50 : 50}
                        />
                    ))}
                </div>
            </div>

            {/* Призыв к действию */}
            <CallToAction
                title={CALL_TO_ACTION.title}
                subtitle={CALL_TO_ACTION.subtitle}
                buttonText={CALL_TO_ACTION.buttonText}
            />
        </div>
    );
};

export default Home;

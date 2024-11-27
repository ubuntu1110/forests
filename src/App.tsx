import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import Home from './components/pages/Home';
import AboutProducts from './components/pages/AboutProducts';
import Vacancies from './components/pages/Vacancies';
import Testimonials from './components/pages/Testimonials';
import MapPage from './components/pages/MapPage';
import Contact from './components/pages/Contact';
import ContestPage from './components/pages/ContestPage';
import CookieConsent from './components/ui/CookieConsent';
import FloatingButton from './components/ui/FloatingButton';
import { inject } from '@vercel/analytics';
import { BankProvider } from './context/BankContext'; // Контекст для банка

// Внедрение аналитики
inject();

const App: React.FC = () => {
    return (
        <BankProvider>
            <ParallaxProvider>
                <Router>
                    {/* Навбар */}
                    <Navbar />

                    {/* Уведомление о cookie */}
                    <CookieConsent />

                    {/* Основной контент */}
                    <div className="pt-16"> {/* Отступ для фиксации Navbar */}
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<AboutProducts />} />
                            <Route path="/vacancies" element={<Vacancies />} />
                            <Route path="/testimonials" element={<Testimonials />} />
                            <Route path="/map" element={<MapPage />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/contest" element={<ContestPage />} />
                        </Routes>
                    </div>

                    {/* Подвал */}
                    <Footer />

                    {/* Плавающая кнопка Telegram */}
                    <FloatingButton />
                </Router>
            </ParallaxProvider>
        </BankProvider>
    );
};

export default App;

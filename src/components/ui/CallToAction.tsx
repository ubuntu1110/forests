import React from 'react';
import { Link } from 'react-router-dom';

interface CallToActionProps {
    title: string;
    subtitle: string;
    buttonText: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ title, subtitle, buttonText }) => {
    return (
        <div className="mt-16 text-center bg-forest-green text-light-green py-16 px-8 rounded-lg shadow-xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide">
                {title}
            </h2>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
                {subtitle}
            </p>
            <Link to="/contact">
                <button className="bg-gold text-dark-bg px-8 py-4 rounded-full text-lg font-semibold hover:bg-light-green hover:text-forest-green transition-colors shadow-lg transform hover:scale-105">
                    {buttonText}
                </button>
            </Link>
        </div>
    );
};

export default CallToAction;

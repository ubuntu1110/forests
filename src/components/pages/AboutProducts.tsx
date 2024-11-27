import React from 'react';
import AboutUs from '../AboutProductsUI/components/AboutUs';
import ProductCards from '../AboutProductsUI/components/ProductCards';
import Gallery from '../AboutProductsUI/components/Gallery';
import Advantages from '../AboutProductsUI/components/Advantages';

const AboutProducts: React.FC = () => {
    return (
        <div className="p-8 bg-light-green text-dark-bg">
            <AboutUs />
            <ProductCards />
            <Gallery />
            <Advantages />
        </div>
    );
};

export default AboutProducts;

import React from 'react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
    const galleryImages = [
        { src: require('../../../assets/gallery1.jpg'), alt: 'Ель 1' },
        { src: require('../../../assets/gallery2.jpg'), alt: 'Ель 2' },
        { src: require('../../../assets/gallery3.jpg'), alt: 'Ель 3' },
        { src: require('../../../assets/gallery4.jpg'), alt: 'Ель 4' },
        { src: require('../../../assets/gallery5.jpg'), alt: 'Ель 5' },
        { src: require('../../../assets/gallery6.jpg'), alt: 'Ель 6' },
    ];

    return (
        <section className="mb-16 py-12 bg-gradient-to-br from-light-green to-forest-green rounded-lg shadow-lg">
            <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                    Галерея
                </h2>
                <p className="text-lg md:text-xl text-light-green">
                    Оцените красоту наших елей и декоративных растений.
                </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-12">
                {galleryImages.map((image, index) => (
                    <motion.div
                        key={index}
                        className="overflow-hidden rounded-lg relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg hover:opacity-90 transition-opacity"
                        />
                        {/* Эффект затемнения при наведении */}
                        <motion.div
                            className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300"
                            whileHover={{ opacity: 0.5 }}
                        ></motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;

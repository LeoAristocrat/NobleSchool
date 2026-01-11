import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    const images = [
        { src: '/school-building.jpg', title: 'Noble Campus', category: 'Infrastructure' },
        { src: '/event-1.jpg', title: 'Interactive Learning', category: 'Activities' },
        { src: '/sports-1.jpg', title: 'Athletic Spirit', category: 'Sports' },
        { src: '/sports-2.jpg', title: 'Team Building', category: 'Sports' },
        { src: '/sports-3.jpg', title: 'Youthful Energy', category: 'Sports' },
        { src: '/school-building.jpg', title: 'Safe Environment', category: 'Campus' }
    ];

    return (
        <section id="gallery" className="gallery section-padding bg-light">
            <div className="container">
                <div className="section-header text-center">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        Moments of <span>Discovery</span>
                    </motion.h2>
                    <p className="section-description mx-auto">
                        A glimpse into the vibrant life at Noble Institute, where learning
                        extends beyond the classroom walls.
                    </p>
                </div>

                <motion.div
                    className="gallery-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1 }
                        }
                    }}
                >
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            className="gallery-item"
                            variants={{
                                hidden: { opacity: 0, y: 30, scale: 0.9 },
                                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            onClick={() => setSelectedImg(img)}
                        >
                            <img src={img.src} alt={img.title} loading="lazy" />
                            <div className="gallery-overlay">
                                <Maximize2 className="zoom-icon" size={24} />
                                <div className="overlay-text">
                                    <span>{img.category}</span>
                                    <h3>{img.title}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        className="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImg(null)}
                    >
                        <button className="close-lightbox"><X size={32} /></button>
                        <motion.img
                            src={selectedImg.src}
                            alt={selectedImg.title}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        />
                        <div className="lightbox-info">
                            <h3>{selectedImg.title}</h3>
                            <span>{selectedImg.category}</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;

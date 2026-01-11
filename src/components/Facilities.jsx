import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Coffee, BookOpen, Clock, Heart } from 'lucide-react';

const Facilities = () => {
    const highlights = [
        { icon: <Shield size={20} />, text: "Safe & Secure Campus" },
        { icon: <Sparkles size={20} />, text: "Modern Classrooms" },
        { icon: <Coffee size={20} />, text: "Supportive Environment" },
        { icon: <BookOpen size={20} />, text: "English-Speaking Zone" },
        { icon: <Clock size={20} />, text: "Disciplined Atmosphere" },
        { icon: <Heart size={20} />, text: "Care & Mentorship" }
    ];

    return (
        <section id="facilities" className="facilities section-padding">
            <div className="container">
                <div className="facilities-layout">
                    <motion.div
                        className="facilities-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="section-title">World-Class Facilities for <br /><span>Modern Learning</span></h2>
                        <p className="section-description">
                            We provide an environment that balances safety, discipline, and comfort,
                            allowing our students to focus entirely on their growth and discovery.
                        </p>

                        <ul className="highlights-list">
                            {highlights.map((item, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * idx }}
                                >
                                    <div className="list-icon">{item.icon}</div>
                                    <span>{item.text}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        className="facilities-visual"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="main-card glass">
                            <h3>State-of-the-Art <br />Campus Design</h3>
                            <p>Designed for inspiration and comfort.</p>

                            <div className="facility-grid">
                                <motion.div className="f-item" whileHover={{ y: -5 }}>Library</motion.div>
                                <motion.div className="f-item" whileHover={{ y: -5 }}>Science Lab</motion.div>
                                <motion.div className="f-item" whileHover={{ y: -5 }}>Activity Hall</motion.div>
                                <motion.div className="f-item" whileHover={{ y: -5 }}>Sports Zone</motion.div>
                            </div>

                            <motion.div
                                className="floating-stat glass"
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <span className="stat-num">100%</span>
                                <span className="stat-text">Safety Record</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Facilities;

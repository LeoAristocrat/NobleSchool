import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Shield } from 'lucide-react';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section id="about" className="about section-padding">
            <div className="container">
                <div className="about-grid">
                    <motion.div
                        className="about-image-container"
                        initial={{ opacity: 0, scale: 0.95, x: -30 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="image-wrapper glass">
                            <motion.img
                                src="/school-building.jpg"
                                alt="Noble Institute Campus"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            />
                            <motion.div
                                className="experience-badge"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                            >
                                <span className="year">Est.</span>
                                <span className="number">2024</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-text-content"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.h2 variants={itemVariants} className="section-title">
                            Crafting a Legacy of <br /><span>Excellence & Care</span>
                        </motion.h2>
                        <motion.p variants={itemVariants} className="section-description">
                            Since 2024, Noble Institute of Education has set the standard for
                            premium, English-medium education in Hailakandi. Our student-first
                            philosophy ensures that every child is nurtured to their full potential.
                        </motion.p>

                        <div className="vision-mission-grid">
                            {[
                                { icon: <Target size={24} />, title: "Our Vision", desc: "Nurturing global citizens with strong moral foundations and a passion for lifelong learning." },
                                { icon: <Heart size={24} />, title: "Our Mission", desc: "Excellence through discipline and academic rigor in a modern, supportive environment." },
                                { icon: <Shield size={24} />, title: "Our Values", desc: "Integrity, innovation, and empathy are the core pillars of our educational community." }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    className="info-card glass"
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <div className="icon-box">{item.icon}</div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;


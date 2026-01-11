import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section id="home" className="hero">
            <div className="container">
                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.span variants={itemVariants} className="hero-badge">
                        Since 2024 • Excellence in Education
                    </motion.span>

                    <motion.h1 variants={itemVariants}>
                        Nurturing Hearts, <span>Empowering Minds.</span>
                    </motion.h1>

                    <motion.p variants={itemVariants}>
                        Noble Institute of Education provides a modern, caring, and
                        future-ready learning path in the heart of Hailakandi.
                    </motion.p>

                    <motion.div variants={itemVariants} className="hero-actions">
                        <motion.a
                            href="#contact"
                            className="cta-btn"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Admissions Open 2024-25 <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                        </motion.a>
                        <motion.a
                            href="#about"
                            className="btn-secondary"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Our Story
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <div className="mouse"></div>
                <span>Discover more</span>
            </motion.div>
        </section>
    );
};

export default Hero;


import React from 'react';
import { motion } from 'framer-motion';
import { Book, Globe, Cpu, Users, ChevronRight } from 'lucide-react';

const Academics = () => {
    const courses = [
        {
            icon: <Book size={32} />,
            title: "Holistic Curriculum",
            desc: "Our English-medium curriculum blends traditional rigor with modern creative thinking, ensuring a well-rounded educational foundation.",
            color: "#eff6ff",
            iconColor: "#1e3a8a"
        },
        {
            icon: <Globe size={32} />,
            title: "Global Perspective",
            desc: "Preparing students for a connected world by fostering cultural awareness, linguistic excellence, and global social responsibility.",
            color: "#f0fdfa",
            iconColor: "#14b8a6"
        },
        {
            icon: <Cpu size={32} />,
            title: "Digital Integration",
            desc: "Empowering students with 21st-century tech skills through smart classrooms and innovation-led learning methodologies.",
            color: "#f5f3ff",
            iconColor: "#8b5cf6"
        },
        {
            icon: <Users size={32} />,
            title: "Character Building",
            desc: "Focusing on moral values, discipline, and emotional intelligence to nurture leaders of tomorrow with hearts of empathy.",
            color: "#fff7ed",
            iconColor: "#f59e0b"
        }
    ];

    return (
        <section id="academics" className="academics section-padding bg-light">
            <div className="container">
                <div className="section-header text-center">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Nurturing Excellence <br /><span>at Every Step</span>
                    </motion.h2>
                    <motion.p
                        className="section-description mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Our academic programs are designed to inspire curiosity and cultivate
                        the skills needed to thrive in a rapidly evolving world.
                    </motion.p>
                </div>

                <div className="academics-grid">
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            className="academic-card glass"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -12, scale: 1.02 }}
                        >
                            <div className="card-icon" style={{ backgroundColor: course.color, color: course.iconColor }}>
                                {course.icon}
                            </div>
                            <h3>{course.title}</h3>
                            <p>{course.desc}</p>
                            <div className="card-footer">
                                <span className="learn-more">
                                    Enquire Now <ChevronRight size={16} />
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Academics;

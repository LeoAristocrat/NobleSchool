import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const contactInfo = [
        { icon: <Phone size={24} />, title: "Call Us", details: "+91 99543 77557", sub: "Mon-Sat, 9am - 4pm" },
        { icon: <Mail size={24} />, title: "Email Us", details: "niehkd2024@gmail.com", sub: "Always here to help" },
        { icon: <MapPin size={24} />, title: "Visit Us", details: "Project-E-Road, Ukilpatty", sub: "Hailakandi, Assam" }
    ];

    return (
        <section id="contact" className="contact section-padding">
            <div className="container">
                <div className="section-header text-center">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        Get in <span>Touch</span>
                    </motion.h2>
                    <p className="section-description mx-auto">
                        Have questions? We're here to provide the information you need.
                        Join the Noble Institute family today.
                    </p>
                </div>

                <div className="contact-grid">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {contactInfo.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="contact-item glass"
                                whileHover={{ x: 10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="icon-box">{item.icon}</div>
                                <div className="item-text">
                                    <h3>{item.title}</h3>
                                    <p className="details">{item.details}</p>
                                    <p className="sub">{item.sub}</p>
                                </div>
                            </motion.div>
                        ))}

                        <div className="map-container glass">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14484.341857326888!2d92.5557766!3d24.8267243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750059345706591%3A0xe54c93547285514b!2sHailakandi%2C%20Assam!5e0!3m2!1sen!2sin!4v1705000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: '20px' }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form-container glass"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <form className="contact-form">
                            <div className="form-group">
                                <input type="text" id="name" required placeholder=" " />
                                <label htmlFor="name">Full Name</label>
                            </div>
                            <div className="form-group">
                                <input type="email" id="email" required placeholder=" " />
                                <label htmlFor="email">Email Address</label>
                            </div>
                            <div className="form-group">
                                <input type="tel" id="phone" required placeholder=" " />
                                <label htmlFor="phone">Phone Number</label>
                            </div>
                            <div className="form-group">
                                <textarea id="message" required placeholder=" " rows="5"></textarea>
                                <label htmlFor="message">How can we help you?</label>
                            </div>
                            <motion.button
                                type="submit"
                                className="cta-btn submit-btn"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Send Message <Send size={18} style={{ marginLeft: '8px' }} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

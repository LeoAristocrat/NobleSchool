import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="logo">
                            <img src="/school-logo.jpg" alt="Noble Institute Logo" className="logo-img" />
                            <div className="logo-text">
                                <span className="name">NOBLE INSTITUTE</span>
                                <span className="sub">OF EDUCATION</span>
                            </div>
                        </div>
                        <p className="footer-tagline">
                            Established in 2024. Providing premium English-medium education
                            with a focus on holistic student development and future readiness.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-icon"><Facebook size={20} /></a>
                            <a href="#" className="social-icon"><Twitter size={20} /></a>
                            <a href="#" className="social-icon"><Instagram size={20} /></a>
                            <a href="#" className="social-icon"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#academics">Academics</a></li>
                            <li><a href="#facilities">Facilities</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact Info</h4>
                        <ul>
                            <li>Project-E-Road, Ukilpatty,</li>
                            <li>Near R.P Road, Hailakandi,</li>
                            <li>Assam, India</li>
                            <li className="mt-2 text-primary"><strong>Phone:</strong> 99543 77557</li>
                            <li className="text-primary"><strong>Email:</strong> niehkd2024@gmail.com</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2024-2026 NOBLE INSTITUTE OF EDUCATION. All Rights Reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

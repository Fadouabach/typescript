import './Footer.css';
import { Github, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="footer section-t-space">
            <div className="container footer-content">
                <div className="footer-col">
                    <h3 className="footer-logo"><span className="logo-accent">Nebula</span>Books</h3>
                    <p className="footer-desc">
                        Exploring the universe, one page at a time.
                        Premium literature for the refined reader.
                    </p>
                </div>

                <div className="footer-col">
                    <h4>Explore</h4>
                    <ul>
                        <li><a href="#">Best Sellers</a></li>
                        <li><a href="#">New Arrivals</a></li>
                        <li><a href="#">Categories</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Connect</h4>
                    <div className="social-links">
                        <a href="#"><Github size={20} /></a>
                        <a href="#"><Twitter size={20} /></a>
                        <a href="#"><Instagram size={20} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 NebulaBooks. All rights reserved.</p>
            </div>
        </footer>
    );
}

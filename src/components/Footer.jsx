function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>DanceBuddy</h4>
                        <p>The ultimate app for dancers to organize and store their moves, choreographies, and battles.</p>
                        <div className="social-links">
                            {/* <a href="#" aria-label="Facebook">📘</a>
                            <a href="#" aria-label="Instagram">📸</a>
                            <a href="#" aria-label="Twitter">🐦</a> */}
                            <a href="https://youtube.com/playlist?list=PLbs8evb_9V4gPy9HcCf_zFnRvhQ9U2UgP&si=hlz7oWFVxuOuaQsQ" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h4>Contact</h4>
                        <ul className="footer-links">
                            <li><a href="mailto:support@dancebuddyapp.com">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Legal</h4>
                        <ul className="footer-links">
                            <li><a href="privacy.html">Privacy Policy</a></li>
                            <li><a href="terms.html">Terms and Conditions</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 DanceBuddy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

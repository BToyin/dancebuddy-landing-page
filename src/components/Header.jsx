import appLogo from '../assets/app_logo-removebg-preview.png';

function Header() {
    return (
        <header>
            <nav className="container">
                <div className="logo">
                    <img src={appLogo} alt="DanceBuddy Logo" className="logo-img" />
                    <span>DanceBuddy</span>
                </div>
                <ul className="nav-links">
                    <li><a href="#features">Features</a></li>
                    <li><a href="#how-it-works">How It Works</a></li>
                    <li><a href="#screenshots">Screenshots</a></li>
                    <li><a href="#download">Download</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

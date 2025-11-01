import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h1>Trip Planners <span>India</span></h1>
                        </Link>
                    </div>
                    <nav className="nav">
                        <Link to="/">Home</Link>
                        <a href="#india">India Holidays</a>
                        <a href="#international">International Holidays</a>
                        <button className="btn-primary">Get FREE Quote</button>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;

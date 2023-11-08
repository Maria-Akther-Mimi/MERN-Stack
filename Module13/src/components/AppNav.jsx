import { Link } from 'react-router-dom';

const AppNav = () => {
    return (
        <div>
            <ul className="nav nav-tabs">
                <li  className="nav-item">
                    <Link to='/' className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to='/blog' className="nav-link">Blog</Link>
                </li>
                <li className="nav-item">
                    <Link to='/about' className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to='/project' className="nav-link">Project</Link>
                </li>
                <li className="nav-item">
                    <Link to='/service' className="nav-link">Service</Link>
                </li>
                <li className="nav-item">
                    <Link to='/contact' className="nav-link">Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default AppNav;

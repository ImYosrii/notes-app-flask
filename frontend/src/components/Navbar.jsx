import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link className="link-item" to="/login">Login</Link>
            <Link className="link-item" to="/signup">Sign-up</Link>
            <Link className="link-item" to="/">Home</Link>
        </nav>
    );
}
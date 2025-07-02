import { Link } from "react-router-dom";

export default function Navbar({loggedin, setLoggedin, setUser}) {

    function handleLogout() {
        setLoggedin(false)
        setUser(null)
    }
    return (
        <nav className="navbar">
            {loggedin ? <Link className="link-item" to="/login" onClick={handleLogout}>Log-out</Link> : 
                <>
                    <Link className="link-item" to="/login">Log-in</Link>
                    <Link className="link-item" to="/signup">Sign-up</Link>
                </>
            }

            { loggedin && <Link className="link-item" to="/">Home</Link> }
        </nav>
    );
}
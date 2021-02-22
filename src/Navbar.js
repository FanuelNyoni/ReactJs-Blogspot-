import { Link } from "react-router-dom"; //use Link for 'a' tags to handle all links on browser

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Pimp Clinic Blog</h1>
            <div className="links">
                <Link to = "/">Home</Link>
                <Link to = "/create">New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;
import * as React from 'react'
import { Link } from 'gatsby'

const NavBar = () => {

    const colorPrimary="blue"
    const activeStyle = {
        color: "#9e7e9d", 
        fontWeight: "bold"
    };

    return (
        <nav>
        <ul className="nav-links">
        <li className="nav-link-item">
            <Link to="/" activeStyle={activeStyle}  className="nav-link-text">
            <p class="hover:text-white">Home</p>
            </Link>
        </li>
        <li className="nav-link-item">
            <Link to="/sketchbook" activeStyle={activeStyle} className="nav-link-text">
            <p class="hover:text-white">Sketchbook</p>
            </Link>
        </li>
        <li className="nav-link-item">
            <Link to="/blog" activeStyle={activeStyle} className="nav-link-text">
            <p class="hover:text-white">Blog</p>
            </Link>
        </li>
        <li className="nav-link-item">
            <Link to="/feedback" activeStyle={activeStyle} className="nav-link-text">
            <p class="hover:text-white">Feedback</p>
            </Link>
        </li>
        </ul>
        </nav>

    )
}

export default NavBar




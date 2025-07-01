import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1>Book Manager</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/add">Add Book</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
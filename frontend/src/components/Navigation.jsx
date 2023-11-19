import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="pb-5 mb-5 border-b">
            <ul className="flex justify-end space-x-5">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;

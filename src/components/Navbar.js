import React, { useState } from "react";
import '../CSS/Navbar.css'



function Navbar() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="navbar">
            <span className="nav_logo">Khutbah</span>
            <div className={`nav_items ${isOpen && "open"}`}>
                <a href="/">Home</a>
                <a href="/allkhutbah">All Articles</a>
                <a href="/upload">Upload</a>
                <a href="/login">Login</a>
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default Navbar;
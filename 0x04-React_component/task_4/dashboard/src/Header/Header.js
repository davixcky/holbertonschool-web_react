import React from "react";
import "./Header.css";
import holberton_logo from "../assets/HolbertonLogo.jpg";

const Header = () => {
    return (
        <div className="App-header">
            <img src={holberton_logo} />
            <h1>School dashboard</h1>
        </div>
    )
}

export default Header;

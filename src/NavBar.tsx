import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export function NavBar() {
    const activeStyle = {
        textDecoration: "underline",
        color: "black"
    };
    return (
        <nav className="navbar-container">
            <NavLink
                end
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
                About
            </NavLink>
            <NavLink
                to="/contact"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
                Contact Us
            </NavLink>
        </nav>
    );
}

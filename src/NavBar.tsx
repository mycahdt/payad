import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { HomePage } from "./pages/HomePage";

export function NavBar() {
    const [visible, setVisible] = useState<boolean>(true);
    const activeStyle = {
        textDecoration: "underline",
        color: "white"
    };
    const notActiveStyle = {
        color: "grey"
    };
    return (
        <div>
            <nav className="navbar-container">
                <NavLink
                    end
                    to="/"
                    style={({ isActive }) =>
                        isActive ? activeStyle : notActiveStyle
                    }
                    onClick={() => setVisible(false)}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) =>
                        isActive ? activeStyle : notActiveStyle
                    }
                    onClick={() => setVisible(false)}
                >
                    About
                </NavLink>
                <NavLink
                    to="/contact"
                    style={({ isActive }) =>
                        isActive ? activeStyle : notActiveStyle
                    }
                    onClick={() => setVisible(false)}
                >
                    Contact Us
                </NavLink>
                <NavLink
                    to="/join"
                    style={({ isActive }) =>
                        isActive ? activeStyle : notActiveStyle
                    }
                    onClick={() => setVisible(false)}
                >
                    Join
                </NavLink>
                <NavLink
                    to="/past"
                    style={({ isActive }) =>
                        isActive ? activeStyle : notActiveStyle
                    }
                    onClick={() => setVisible(false)}
                >
                    Past Events
                </NavLink>
                <NavLink
                    to="/future"
                    style={({ isActive }) =>
                        isActive ? activeStyle : notActiveStyle
                    }
                    onClick={() => setVisible(false)}
                >
                    Future Events
                </NavLink>
            </nav>
            {visible && <HomePage />}
        </div>
    );
}

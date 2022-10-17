import React from "react";
import "./App.css";
import { NavBar } from "./NavBar";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">PAYAD Website</header>
            <h1>Words words</h1>
            <h2>Hi hello</h2>
            <div>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<HomePage />}></Route>
                        <Route path="/about" element={<AboutPage />}></Route>
                        <Route
                            path="/contact"
                            element={<ContactPage />}
                        ></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;

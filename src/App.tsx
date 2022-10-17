import React from "react";
import "./App.css";
import { NavBar } from "./NavBar";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { JoinPage } from "./pages/JoinPage";
import { PastEventsPage } from "./pages/PastEventsPage";
import { FutureEventsPage } from "./pages/FutureEventsPage";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">PAYAD Website</header>
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
                        <Route path="/join" element={<JoinPage />}></Route>
                        <Route
                            path="/past"
                            element={<PastEventsPage />}
                        ></Route>
                        <Route
                            path="/future"
                            element={<FutureEventsPage />}
                        ></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;

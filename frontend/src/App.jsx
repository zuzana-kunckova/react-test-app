import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";

const App = () => {
    return (
        <div className="w-2/3 mx-auto my-10">
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
            </Routes>
        </div>
    );
};

export default App;

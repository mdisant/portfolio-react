import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Gallery from './pages/Gallery';
import ProjectDisplay from './pages/ProjectDisplay';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';

function App() {


    return (
        <div className="App">

            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/portfolio/:link" element={<ProjectDisplay />} />
                    <Route path="/gallery" element={<Gallery />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Gallery from './pages/Gallery';
import Resume from './pages/Resume';
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
                    <Route path="/project/:id" element={<ProjectDisplay />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;

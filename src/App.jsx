import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faSignInAlt, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Check if the user is logged in (i.e., JWT token or similar)
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <Router>
            <div>
                <nav>
                    <Link to="/signup">
                        <FontAwesomeIcon icon={faUserPlus} /> Signup
                    </Link>
                    <span> | </span>
                    <Link to="/login">
                        <FontAwesomeIcon icon={faSignInAlt} /> Login
                    </Link>
                    <span> | </span>
                    {/* If the user is logged in, show Dashboard link */}
                    {isLoggedIn && (
                        <Link to="/dashboard">
                            <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
                        </Link>
                    )}
                </nav>
                <Routes>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                    {/* Redirect to dashboard if logged in */}
                    <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

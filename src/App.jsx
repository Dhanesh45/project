import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faSignInAlt, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Check if the user is logged in (i.e., JWT token or similar)
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        console.log("Token found:", token);  // Debugging line to see if the token exists
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false); // Ensure this is false when no token
        }
    }, []);

    return (
        <Router>
            <div className="min-h-screen bg-gray-100">
                {/* Navigation Bar */}
                <nav className="bg-black text-white py-4 shadow-md">
                    <div className="container mx-auto flex justify-between items-center px-4">
                        <h1 className="text-2xl font-bold">E-Learning App</h1>
                        <div className="space-x-4">
                            <Link
                                to="/signup"
                                className="hover:bg-gray-800 px-3 py-2 rounded-md transition"
                            >
                                <FontAwesomeIcon icon={faUserPlus} className="mr-2" /> Signup
                            </Link>
                            <Link
                                to="/login"
                                className="hover:bg-gray-800 px-3 py-2 rounded-md transition"
                            >
                                <FontAwesomeIcon icon={faSignInAlt} className="mr-2" /> Login
                            </Link>
                            {isLoggedIn && (
                                <Link
                                    to="/dashboard"
                                    className="hover:bg-gray-800 px-3 py-2 rounded-md transition"
                                >
                                    <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" /> Dashboard
                                </Link>
                            )}
                        </div>
                    </div>
                </nav>

                {/* Routes */}
                <div className="container mx-auto py-10">
                    <Routes>
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                        {isLoggedIn && <Route path="/dashboard" element={<Dashboard />} />}
                        {/* If not logged in, redirect to login */}
                        {!isLoggedIn && <Route path="/dashboard" element={<Login />} />}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;

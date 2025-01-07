import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/dashboard.css'; // Import your custom CSS

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear the authentication token from localStorage
        localStorage.removeItem('authToken');
        // Redirect the user to the login page
        navigate('/login');
    };

    return (
        <div className="dashboard">
            <h1>Welcome to Your E-Learning Dashboard</h1>
            <p>You are logged in successfully. Explore your courses, assignments, and much more!</p>

            <div className="dashboard-sections">
                <div className="section">
                    <h3>My Courses</h3>
                    <p>Browse and access all the courses you are enrolled in.</p>
                    <Link to="/courses" className="btn">Go to My Courses</Link>
                </div>

                <div className="section">
                    <h3>Assignments</h3>
                    <p>Check your assignments and submit them on time.</p>
                    <Link to="/assignments" className="btn">View Assignments</Link>
                </div>

                <div className="section">
                    <h3>Messages</h3>
                    <p>View and send messages to instructors or peers.</p>
                    <Link to="/messages" className="btn">Go to Messages</Link>
                </div>

                <div className="section">
                    <h3>Account Settings</h3>
                    <p>Update your profile, password, and other settings.</p>
                    <Link to="/settings" className="btn">Edit Account</Link>
                </div>
            </div>

            {/* Logout Button */}
            <div className="logout-btn-container">
                <button className="btn-logout" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default Dashboard;


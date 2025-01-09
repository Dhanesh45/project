import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken'); // Clear the authentication token
        navigate('/login'); // Redirect to login page
    };

    return (
        <div className="dashboard flex items-center justify-center min-h-screen bg-white">
            <div className="w-full max-w-4xl bg-white text-black p-10 rounded-lg shadow-xl border-2 border-black">
                <h1 className="text-4xl font-bold text-center mb-6">Welcome to Your Dashboard</h1>
                <p className="text-lg text-center mb-10">
                    Explore your courses, assignments, messages, and account settings all in one place!
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                    <div className="section bg-white text-black p-6 rounded-lg shadow-md border-2 border-black">
                        <h3 className="text-2xl font-semibold mb-4">My Courses</h3>
                        <p className="mb-4">Browse and access all the courses you are enrolled in.</p>
                        <Link
                            to="/courses"
                            className="inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
                        >
                            Go to My Courses
                        </Link>
                    </div>

                    <div className="section bg-white text-black p-6 rounded-lg shadow-md border-2 border-black">
                        <h3 className="text-2xl font-semibold mb-4">Assignments</h3>
                        <p className="mb-4">Check your assignments and submit them on time.</p>
                        <Link
                            to="/assignments"
                            className="inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
                        >
                            View Assignments
                        </Link>
                    </div>

                    <div className="section bg-white text-black p-6 rounded-lg shadow-md border-2 border-black">
                        <h3 className="text-2xl font-semibold mb-4">Messages</h3>
                        <p className="mb-4">View and send messages to instructors or peers.</p>
                        <Link
                            to="/messages"
                            className="inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
                        >
                            Go to Messages
                        </Link>
                    </div>

                    <div className="section bg-white text-black p-6 rounded-lg shadow-md border-2 border-black">
                        <h3 className="text-2xl font-semibold mb-4">Account Settings</h3>
                        <p className="mb-4">Update your profile, password, and other settings.</p>
                        <Link
                            to="/settings"
                            className="inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
                        >
                            Edit Account
                        </Link>
                    </div>
                </div>

                <div className="text-center">
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            if (response.data.token) {
                localStorage.setItem('authToken', response.data.token);
                setIsLoggedIn(true);
                navigate('/dashboard');
            }
        } catch (err) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="login flex items-center justify-center min-h-screen bg-white">
            <div className="w-full max-w-md bg-white text-black p-10 rounded-lg shadow-xl border-2 border-black">
                <h2 className="text-5xl font-bold mb-8 text-center">Login</h2>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <Label className="block mb-3 text-lg">Email:</Label>
                        <Input
                            className="w-full p-3 rounded-lg border border-black bg-white text-black"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <Label className="block mb-3 text-lg">Password:</Label>
                        <Input
                            className="w-full p-3 rounded-lg border border-black bg-white text-black"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <Button
                        type="submit"
                        className="w-full bg-black text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-800"
                    >
                        Login
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Login;

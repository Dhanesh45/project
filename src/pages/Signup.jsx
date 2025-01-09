import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Signup() {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/signup', formData);
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.message || 'Error occurred during signup.');
        }
    };

    return (
        <div className="signup flex items-center justify-center min-h-screen bg-white">
            <div className="w-full max-w-md bg-white text-black p-10 rounded-lg shadow-xl border-2 border-black">
                <h2 className="text-4xl font-bold mb-8 text-center">Signup</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <Label className="block mb-3 text-lg">Username:</Label>
                        <Input
                            type="text"
                            name="username"
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-lg border border-black bg-white text-black"
                        />
                    </div>
                    <div>
                        <Label className="block mb-3 text-lg">Email:</Label>
                        <Input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-lg border border-black bg-white text-black"
                        />
                    </div>
                    <div>
                        <Label className="block mb-3 text-lg">Password:</Label>
                        <Input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-lg border border-black bg-white text-black"
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full bg-black text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-800"
                    >
                        Signup
                    </Button>
                </form>
                {message && (
                    <p className="text-center text-lg mt-4">{message}</p>
                )}
            </div>
        </div>
    );
}

export default Signup;

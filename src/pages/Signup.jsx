import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


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
        <div className='signup'>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <Label>Username:</Label>
                    <Input type="text" name="username" onChange={handleChange} required />
                </div>
                <div>
                    <Label>Email:</Label>
                    <Input type="email" name="email" onChange={handleChange} required />
                </div>
                <div>
                    <Label>Password:</Label>
                    <Input type="password" name="password" onChange={handleChange} required />
                </div>
                <Button type="submit">Signup</Button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Signup;

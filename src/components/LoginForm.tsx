// components/LoginForm.tsx
import React, { useState } from 'react';
import FormInput from './FormInput';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login form submitted:', formData);
        // TODO: validasi dan request ke backend
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormInput
                label="Username"
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
            />
            <FormInput
                label="Password"
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
            />

            <div className="d-flex justify-content-end">
                <button
                    type="submit"
                    className="btn btn-success"
                    style={{ width: '100%', maxWidth: '100px' }}
                >
                    Login
                </button>
            </div>
        </form>

    );
};

export default LoginForm;

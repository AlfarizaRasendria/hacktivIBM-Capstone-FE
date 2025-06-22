// components/RegisterForm.tsx
import React, { useState } from 'react';
import FormInput from './FormInput';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Register form submitted:', formData);
        // Validasi dan kirim data ke backend kalau perlu
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormInput
                label="FullName"
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
            />
            <FormInput
                label="Username"
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
            />
            <FormInput
                label="Email"
                type="email"
                id="email"
                value={formData.email}
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
                    className="btn btn-success align-self-end"
                    style={{ width: '100%', maxWidth: '150px' }}
                >
                    Register
                </button>
            </div>
        </form>
    );
};

export default RegisterForm;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
    const navigate = useNavigate();

    const [data, setData] = React.useState({
        email: '',
        password: '',
        name: '',
        age: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/register`, data);

            console.log('Registration successful:', response.data);

            // (Optional) Save credentials locally - not secure for production
            // localStorage.setItem('email', data.email);
            // localStorage.setItem('password', data.password);

            navigate('/login');
        } catch (error) {
            console.error('Error registering user:', error.response?.data || error.message);
            alert("Registration failed. Please try again.");
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
                />
                <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
                />
                <input
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                    style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
                />
                <input
                    type="number"
                    name="age"
                    value={data.age}
                    onChange={handleChange}
                    placeholder="Age"
                    required
                    style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
                />
                <input
                    type="text"
                    name="address"
                    value={data.address}
                    onChange={handleChange}
                    placeholder="Address"
                    required
                    style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
                />
                <button
                    type="submit"
                    style={{
                        width: '100%',
                        padding: '10px',
                        backgroundColor: '#007BFF',
                        color: '#fff',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default Registration;

import axios from 'axios';
import React, { useEffect ,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UpdatePage = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // Assuming you are using useParams to get the user ID from the URL
    const [data, setData] = useState({
        name: '',
        email: '',
        age: '',
        address: ''
    });
    useEffect(() => {
        // Fetch user data by ID and populate form fields
        axios.get(`${import.meta.env.VITE_API_URL}/api/user/${id}`)
            .then((response) => {
                // Set form data with the fetched user data
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
                alert("Failed to fetch user data for update.");
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send updated data to the server
        axios.put(`${import.meta.env.VITE_API_URL}/api/user/${id}`, data)
            .then((response) => {
                alert("User updated successfully.");
                console.log('User updated:', response.data);
                navigate('/'); // Redirect to home page after successful update
                
            })
            .catch((error) => {
                console.error('Error updating user data:', error);
                alert("Failed to update user data.");
            });
    };

  return (
    <div>
      <h1>This is the update Page</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
            />
            <input
                type="number"
                name="age"
                value={data.age}
                onChange={handleChange}
            />
            <input
                type="text"
                name="address"
                value={data.address}
                onChange={handleChange}
            />
            <button type="submit">Update User</button>
        </form>

    </div>
  )
}

export default UpdatePage

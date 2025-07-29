import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const [data, setData] = React.useState([]);

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/api/user`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        alert("Failed to fetch user data.");
      });
  }, [data]);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    navigate('/login'); // Redirect to login page after logout
  }

  const handleDelete = async (id) => {
      const confirmDelete = window.confirm("Are you sure you want to delete this user?");
      if (!confirmDelete) return; // Exit if user cancels
    try {
       await axios.delete(`${import.meta.env.VITE_API_URL}/api/user/${id}`);
       navigate('/'); // Redirect to home page after successful deletion
    } catch (error) {
       console.error('Error deleting user:', error);
       alert("Failed to delete user.");
    }
  };
  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <h2>The All Registered Users</h2>
      {data.map((user, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <button onClick={() => navigate(`/update/${user._id}`)}>Edit</button>
          <button onClick={() => handleDelete(user._id)}>Delete</button>
        </div>
      ))}
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Home

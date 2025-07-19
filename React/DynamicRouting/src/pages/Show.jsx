import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Show = () => {
  const params = useParams(); // Get ID from URL
  const [user, setUser] = useState([]); // Store user data
  const [loading, setLoading] = useState(true); // Handle loading

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`);
        setUser(res.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [params.id]);

  if (loading) return <p>Loading user data...</p>;
  if (!user) return <p>User not found</p>;

  return (
    <div>
      <h1>User Detail</h1>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p><strong>Company:</strong> {user.company?.name}</p>
      <p><strong>Address:</strong> {user.address?.city}, {user.address?.street}</p>
    </div>
  );
};

export default Show;

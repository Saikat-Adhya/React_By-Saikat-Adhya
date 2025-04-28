import React, { useState } from 'react';
import Posts from '../api/posts.json';

const Card = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter posts based on search input
  const filteredPosts = Posts.posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Hello Posts</h1>
      
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '10px', width: '300px', marginBottom: '20px' }}
      />
      
      {/* Display Filtered Posts */}
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <div key={post.id} style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '5px' }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
};

export default Card;

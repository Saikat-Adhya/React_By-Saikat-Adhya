import React from 'react';

const User = ({name,isLogin}) => {
  return (
    <h1>{isLogin ? `Welcome ${name}` : 'Please Login'}</h1>
  );
};

export default User;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login_Page() {
  // State for username and password fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with actual authentication logic
    console.log('Username:', username);
    console.log('Password:', password);
    navigate('/clients')
   
  };
   

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        
        {/* Username Input */}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        {/* Password Input */}
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="login-button" onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
}

export default Login_Page;

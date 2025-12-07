import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function LoginCmp(){
 
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


const params = new URLSearchParams();
params.append('username', username);
params.append('password', password);


    try {
      const response = await axios.post(
        `${API_BASE_URL}/public/login`, params,
          {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            withCredentials: true
           }
      );

      if (response.status === 200) {
        const { username, message } = response.data;
        // Store user info temporarily (or use Context for global access)
        localStorage.setItem('userName', username);
        localStorage.setItem('message', message);
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/home');
      }
    } catch (error) {
      alert('Login failed. Please check your credentials.');
    }
  };

  

  /*
  async function handleLogin(e){
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    e.preventDefault();

     try {
      const response = await axios.get(`${API_BASE_URL}/api/getMsg.json`);
      console.log(response);
    }catch (error) {
      
      console.log(error);
    }
  }
    */

   return (
   <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4 p-md-5" style={{ width: '450px' }}>
        <h4 className="text-center mb-4">Login Here</h4>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input type="text" className="form-control" value={username}
              onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" value={password}
              onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <div className="mt-3 text-center">
          <small>
            New user? <Link to="/register">Register here</Link>
          </small>
        </div>
      </div>
    </div>
  );

}

export default LoginCmp;
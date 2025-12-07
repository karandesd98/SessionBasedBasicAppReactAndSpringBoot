import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterCmp() {
  //hooks
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const navigate = useNavigate();

  //states
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);
 
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    address: '',
    isDeleted: false,
    age: ''
  });

//handeler functions
const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const response = await axios.post(`${API_BASE_URL}/public/createNewUser.json`, formData,{ withCredentials: true });
      if (response.status === 201 || response.status === 200) {
        setSuccessMsg('Registration successful! Redirecting to login...');
        setTimeout(() => navigate('/login'), 2000);
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Registration failed. Try again.';
      setErrorMsg(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-2 p-md-5" style={{ width: '500px' }}>
        <h4 className="text-center mb-4">Register</h4>

        {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
        {successMsg && <div className="alert alert-success">{successMsg}</div>}

        <form onSubmit={handleRegister}>
          
           
       <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" className="form-control" name="username" value={formData.username} onChange={handleChange} required />
        </div>

       <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input type="number" className="form-control" name="age" value={formData.age} onChange={handleChange} />
        </div>

          <button type="submit" className="btn btn-success w-100" disabled={loading} >  {loading ? 'Registering...' : 'Register'}</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterCmp;
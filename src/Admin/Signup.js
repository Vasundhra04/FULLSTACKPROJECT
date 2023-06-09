import React, { useState } from 'react';
import '../Assets/css/Form.css';
import { Link, useNavigate } from 'react-router-dom';
import { BackBtn, HomeBtn } from '../Components/Buttons';
import { xSignup } from '../services/api';

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userid: '',
    address: '',
    confirmpassword: '',
    country:'',
    city:'',
    emailid: '',
    name: '',
    password: '',
    phno: '',
  });


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await xSignup(formData);
      if (response.data === 'useradded') {
        alert('Signup Success !');
        navigate("/Signin");
      }
      else if (response.data === 'existingusername') {
        alert('Username Already Exsists !');
      }
    } catch (error) {
      alert('An error occurred');
      console.error(error);
    }
  };

  return (
    <div>
      <div className="form-container signup-bg">
        <form className="form cardx3" onSubmit={handleSignUp}>
          <p className="title">Register </p>
          <p className="message">Signup now and get full access to our app. </p>
          <div className="flex">
            <label>
              <input required placeholder="" type="text" className="input" name="userid" value={formData.userid} onChange={handleInputChange} />
              <span>UserId</span>
            </label>
            <label>
              <input required placeholder="" type="text" className="input" name="address" value={formData.address} onChange={handleInputChange} />
              <span>Address</span>
            </label>
          </div>
          <label>
            <input required placeholder="" type="text" className="input" name="name" value={formData.name} onChange={handleInputChange} />
            <span>Name</span>
          </label>
          <label>
            <input required placeholder="" type="email" className="input" name="emailid" value={formData.emailid} onChange={handleInputChange} />
            <span>EmailId</span>
          </label>
          <label>
            <input required placeholder="" type="password" className="input" name="password" value={formData.password} onChange={handleInputChange} />
            <span>Password</span>
          </label>
          <label>
            <input required placeholder="" type="password" className="input" name="confirmpassword" value={formData.confirmpassword} onChange={handleInputChange} />
            <span>Confirmpassword</span>
          </label>
          <label>
            <input required placeholder="" type="text" className="input" name="country" value={formData.country} onChange={handleInputChange} />
            <span>Country</span>
          </label>
          <label>
            <input required placeholder="" type="text" className="input" name="city" value={formData.city} onChange={handleInputChange} />
            <span>City</span>
          </label>
          <label>
            <input required placeholder="" type="number" className="input" name="phno" value={formData.phno} onChange={handleInputChange} />
            <span>Phno</span>
          </label>
          
          <div className="submit-btn">
            <button className="Btn" type="submit">
              Sign Up
            </button>
          </div>
          <p className="signin">
            Already have an account? <Link to="/Login">Login</Link>
          </p>
        </form>
      </div>
      <HomeBtn />
      <BackBtn />
    </div>
  );
}
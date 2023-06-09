import {useState,useEffect} from 'react'
import '../Assets/css/Form.css'
import { Link,useNavigate } from 'react-router-dom'
import { HomeBtn } from '../Components/Buttons'
import { xSignin } from '../services/api'
import Cookies from 'js-cookie';

export default function Signin() {
  
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('isLoggedIn') === 'true');
  const [formData, setFormData] = useState({
    emailid: '',
    password: '',
  });

  useEffect(() => {
      if (isLoggedIn) {
        navigate('/Dashboard');
      }
    }, [isLoggedIn, navigate]);



  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await xSignin(formData);
      if (response.data === 'success') {
        Cookies.set('isLoggedIn', 'true');
        alert('Login success');
        navigate("/Dashboard");
      } else if (response.data === 'invalid') {
        alert('Invalid');
        console.log('Invalid ');
      } else if (response.data === 'invalidpassword') {
        alert('Invalidpassword');
        console.log('Invalidpassword');
      }
    } catch (error) {
      alert('An error occurred');
      console.error(error);
    }
  };


  return (
    <div>
      <div className='form-container sign-bg'>
        <form className="form cardx2" onSubmit={handleSignIn}>
          <p className="title">Login </p>
          <p className="message">Login to modify the Cars. </p>
          <label>
            <input required placeholder="" type="text" className="input" name="emailid" value={formData.emailid} onChange={handleInputChange}/>
            <span>EmailId</span>
          </label>
          <label>
            <input required placeholder="" type="password" className="input"  name="password" value={formData.password} onChange={handleInputChange}/>
            <span>Password</span>
          </label>
          <div className='submit-btn'>
            <button className="Btn" type='submit'>
              Sign In
            </button>
          </div>
          <p className="signin">Wanna create an new acount ? <Link to='/Signup'>Signup</Link> </p>
        </form>
      </div>
      <HomeBtn/>
    </div>
  )
}
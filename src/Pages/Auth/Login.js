import React, { useState } from 'react';
import { displayForm } from '../../functions/displayForm';
import { loginUser } from '../../api/loginUser';
import { NavLink, Redirect } from 'react-router-dom';
import './auth.css';

const Login = ({ setLoggedInUserInfo }) => {
  const userLoginSchema = {
    email: '',
    password: '',
  };
  const [userLoginInfo, setUserLoginInfo] = useState(userLoginSchema);
  const [resStatus, setResStatus] = useState(0);

  const formInfo = [
    {
      name: 'Email',
      id: 'email',
      type: 'text',
      value: userLoginInfo.email,
    },
    {
      name: 'Password',
      id: 'password',
      type: 'password',
      value: userLoginInfo.password,
    },
  ];

  const handleChange = (input, value) => {
    let userCredentials = {
      ...userLoginInfo,
      [input]: value,
    };
    setUserLoginInfo(userCredentials);
  };

  const handleClick = async () => {
    const response = await loginUser(userLoginInfo);
    setResStatus(response.status);
    setLoggedInUserInfo({
      user: response.data.user,
      token: response.data.token,
      isLoggedIn: true,
    });
  };

  return (
    <div>
      {resStatus !== 200 ? (
        <div className='page-container'>
          <h3>Login Page</h3>
          <p>Please log in to continue.</p>
          <form className='form-container'>
            {displayForm(formInfo, handleChange)}
          </form>
          <button className='submit-btn' onClick={handleClick}>
            Login
          </button>
          <p>
            If you don't have an account please{' '}
            <NavLink to='/signup'>sign up</NavLink>
          </p>
        </div>
      ) : (
        <Redirect to='/' />
      )}
    </div>
  );
};

export default Login;

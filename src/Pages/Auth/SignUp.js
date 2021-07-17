import React, { useState } from 'react';
import { displayForm } from '../../functions/displayForm';
import { postNewUser } from '../../api/postNewUser';
import './auth.css';

const SignUp = () => {
  const userSchema = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  const [user, setUser] = useState(userSchema);
  const [res, setRes] = useState({ status: 0 });

  const formInfo = [
    {
      name: 'First Name',
      id: 'firstName',
      type: 'text',
      value: user.firstName,
    },
    {
      name: 'Last Name',
      id: 'lastName',
      type: 'text',
      value: user.lastName,
    },
    {
      name: 'Mail',
      id: 'email',
      type: 'email',
      value: user.email,
    },
    {
      name: 'Password',
      id: 'password',
      type: 'password',
      value: user.password,
    },
  ];

  const handleChange = (input, value) => {
    let newUser = { ...user, [input]: value };
    setUser(newUser);
  };

  const handleClick = async () => {
    let response = await postNewUser(user);
    setRes(response);
  };

  return (
    <div>
      {res.status !== 200 ? (
        <div className='page-container'>
          <h3>Please fill the form to create a new account.</h3>
          <form className='form-container'>
            {displayForm(formInfo, handleChange)}
          </form>
          <button className='submit-btn' onClick={handleClick}>
            Submit
          </button>{' '}
        </div>
      ) : (
        <>
          <p>You have successfully create your account.</p>
        </>
      )}
    </div>
  );
};

export default SignUp;

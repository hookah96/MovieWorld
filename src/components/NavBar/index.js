import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const NavBar = ({ children, loggedInUserInfo }) => {
  const { first_name, last_name, id } = loggedInUserInfo.user;

  return (
    <div>
      <div className='header-container'>
        <NavLink to='/' className='logo' activeClassName='logo'>
          <h1>Movies World</h1>
        </NavLink>
        <div className='actions-container'>
          {first_name && last_name ? (
            <p>
              Welcome back{' '}
              <NavLink
                to={`/user-profile/${id}`}
                activeClassName='user-prof'
                className='user-prof'
              >
                {first_name} {last_name}
              </NavLink>
            </p>
          ) : (
            <p>
              <NavLink
                to='/login'
                activeClassName='btn'
                className='btn'
                id='login-btn'
              >
                Log in
              </NavLink>{' '}
              or{' '}
              <NavLink
                to='/signup'
                activeClassName='btn-active'
                className='btn'
                id='signup-btn'
              >
                Sign up
              </NavLink>
            </p>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default NavBar;

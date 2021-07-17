import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import NavBar from '../components/NavBar';
import SignUp from './Auth/SignUp';
import Login from './Auth/Login';
import UserProfile from './UserProfile';
import NewMovie from './NewMovie';
import { getAllMovies } from '../api/getMovies';

const Pages = () => {
  const [loggedInUserInfo, setLoggedInUserInfo] = useState({
    user: {},
    token: '',
    isLoggedIn: false,
  });

  const { user, token } = loggedInUserInfo;

  return (
    <div>
      <NavBar loggedInUserInfo={loggedInUserInfo}>
        <Switch>
          <Route
            path='/new-movie'
            component={() => <NewMovie userID={user.id} token={token} />}
          />
          <Route
            path='/login'
            component={() => (
              <Login setLoggedInUserInfo={setLoggedInUserInfo} />
            )}
          />
          <Route path='/signup' component={SignUp} />
          <Route
            path='/user-profile/:user_movie_id'
            component={() =>
              user.id ? <UserProfile /> : <p>You have to login to continue.</p>
            }
          />
          <Route
            path='/'
            component={() => (
              <Homepage loggedInUserInfo={loggedInUserInfo} userID={user.id} />
            )}
          />
        </Switch>
      </NavBar>
    </div>
  );
};

export default Pages;

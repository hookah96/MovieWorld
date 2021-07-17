import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const NewMovieBtn = () => {
  return (
    <NavLink
      to='/new-movie'
      className='new_movie-cont'
      activeClassName='new_movie-cont'
    >
      <p>New Movie</p>
    </NavLink>
  );
};

export default NewMovieBtn;

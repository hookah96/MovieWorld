import React from 'react';
import moment from 'moment';
import { NavLink, useParams } from 'react-router-dom';
import './styles.css';

const MovieCard = ({ movie, isLoggedIn, userID, user_movie_id }) => {
  const {
    title,
    description,
    hates,
    likes,
    upload_date,
    first_name,
    last_name,
    user_id,
  } = movie;

  const handleReaction = (e) => {
    console.log(e);
  };
  return (
    <div className='card-container'>
      <div className='card'>
        <h3>{title}</h3>
        <p>Posted {moment(upload_date).format('DD/MM/YYYY')}</p>
      </div>
      <p>{description}</p>
      <div className='card'>
        <p>
          {likes} likes | {hates} hates
        </p>
        {isLoggedIn && userID !== user_id && (
          <p>
            <button onClick={(e) => handleReaction(e)}>Like</button>|
            <button onClick={(e) => handleReaction(e)}>Hate</button>
          </p>
        )}
        <p>
          Posted by{' '}
          <NavLink
            to={`/user-profile/${user_id}`}
            activeClassName='author'
            className='author'
          >
            {userID !== user_id ? (
              <>
                {first_name} {last_name}{' '}
              </>
            ) : (
              <>You </>
            )}
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;

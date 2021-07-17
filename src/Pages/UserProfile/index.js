import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getUserMovies } from '../../api/getMovies';
import MovieCard from '../../components/MovieCard';

const UserProfile = ({ userID }) => {
  const [userMovies, setUserMovies] = useState([]);
  const { user_movie_id } = useParams();
  useEffect(() => {
    const fetchUserMovies = async (id) => {
      let res = await getUserMovies(id);
      const { data } = res;
      setUserMovies(data);
    };
    fetchUserMovies(user_movie_id);
  }, [user_movie_id, setUserMovies]);

  const displayMovies =
    userMovies !== undefined &&
    userMovies.map((el) => {
      return (
        <MovieCard
          key={el.id}
          isLoggedIn={true}
          userID={userID}
          user_movie_id={user_movie_id}
          movie={el}
        />
      );
    });

  return (
    <div>
      {userMovies.length !== 0 ? (
        displayMovies
      ) : (
        <p>You haven't share any movies yet.</p>
      )}
    </div>
  );
};

export default UserProfile;

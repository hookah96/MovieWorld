import React, { useState } from 'react';
import { displayForm } from '../../functions/displayForm';
import { postNewMovie } from '../../api/postNewMovie';

const NewMovie = ({ userID, token }) => {
  const newMovieSchema = {
    title: '',
    description: '',
  };
  const [newMovie, setNewMovie] = useState(newMovieSchema);
  const [res, setRes] = useState({ status: 0 });

  const labelsInfo = [
    {
      name: 'Title',
      id: 'title',
      type: 'text',
      value: newMovie.title,
    },
    {
      name: 'Description',
      id: 'description',
      type: 'text',
      value: newMovie.description,
    },
  ];

  const handleChange = (input, value) => {
    let newMovieToPost = { ...newMovie, [input]: value };
    setNewMovie(newMovieToPost);
  };

  const handleClick = async () => {
    let response = await postNewMovie(newMovie, userID, token);
    setRes(response);
  };

  return (
    <div>
      {res === 200 ? (
        <h3>Your movie has submitted.</h3>
      ) : (
        <div>
          {displayForm(labelsInfo, handleChange)}
          <button onClick={handleClick}>Submit movie</button>
        </div>
      )}
    </div>
  );
};

export default NewMovie;

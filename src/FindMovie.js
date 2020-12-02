import React, { useState } from 'react';
import { getMovie } from './api';

export const FindMovie = () => {
  const [foundMovie, setFoundMovie] = useState(null);
  const [title, setTitle] = useState('');

  const searchMovie = async() => {
    const currentMovie = await getMovie(title);

    // eslint-disable-next-line no-console
    console.log(currentMovie, foundMovie);

    setFoundMovie({
      title: currentMovie.Title,
      id: currentMovie.imdbID,
      description: currentMovie.Plot,
      imdbUrl: currentMovie.imdbID,
    });
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={title}
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={searchMovie}
      >
        Find Movie
      </button>
    </>
  );
};

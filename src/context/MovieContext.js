import React, { createContext, useContext, useReducer } from 'react';
import { movies } from '../data/data';

const MovieContext = createContext();

const initialState = {
  starredMovies: [],
  watchlist: [],
};

const movieReducer = (state, action) => {
  switch (action.type) {
    case 'STAR_MOVIE':
      return {
        ...state,
        starredMovies: [...state.starredMovies, action.payload],
      };
    case 'UNSTAR_MOVIE':
      return {
        ...state,
        starredMovies: state.starredMovies.filter(
          (movieId) => movieId !== action.payload
        ),
      };
    case 'ADD_TO_WATCHLIST':
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload],
      };
    case 'REMOVE_FROM_WATCHLIST':
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movieId) => movieId !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  return (
    <MovieContext.Provider value={{ state, dispatch, movies }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);

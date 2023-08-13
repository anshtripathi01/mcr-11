import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Text, VStack, Button } from '@chakra-ui/react';
import { useMovieContext } from '../context/MovieContext';

const MovieDetail = () => {
  const { id } = useParams();
  const { movies, state, dispatch } = useMovieContext();
  const movie = movies.find((movie) => movie.id === parseInt(id));
  const isStarred = state.starredMovies.includes(parseInt(id));
  const isAddedToWatchlist = state.watchlist.includes(parseInt(id));

  const handleStarClick = () => {
    if (isStarred) {
      dispatch({ type: 'UNSTAR_MOVIE', payload: parseInt(id) });
    } else {
      dispatch({ type: 'STAR_MOVIE', payload: parseInt(id) });
    }
  };

  const handleWatchlistClick = () => {
    if (isAddedToWatchlist) {
      dispatch({ type: 'REMOVE_FROM_WATCHLIST', payload: parseInt(id) });
    } else {
      dispatch({ type: 'ADD_TO_WATCHLIST', payload: parseInt(id) });
    }
  };

  return (
    <Box p="4">
      <Image src={movie.imageURL} alt={movie.title} />
      <VStack mt="4" alignItems="flex-start">
        <Text fontSize="xl" fontWeight="bold">
          {movie.title}
        </Text>
        <Text>Year: {movie.year}</Text>
        <Text>Genre: {movie.genre.join(', ')}</Text>
        <Text>Director: {movie.director}</Text>
        <Text>Writer: {movie.writer}</Text>
        <Text>Cast: {movie.cast.join(', ')}</Text>
        <Text>Summary: {movie.summary}</Text>
        <Button mt="2" onClick={handleStarClick}>
          {isStarred ? 'Unstar' : 'Star'}
        </Button>
        <Button mt="2" onClick={handleWatchlistClick}>
          {isAddedToWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
        </Button>
      </VStack>
    </Box>
  );
};

export default MovieDetail;

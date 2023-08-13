import React from 'react';
import { Box, Heading, SimpleGrid, Text, Center } from '@chakra-ui/react';
import { useMovieContext } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';

const Watchlist = () => {
  const { state, movies, dispatch } = useMovieContext();

  const watchlistMovies = movies.filter((movie) =>
    state.watchlist.includes(movie.id)
  );

  const handleRemoveFromWatchlist = (movieId) => {
    dispatch({ type: 'REMOVE_FROM_WATCHLIST', payload: movieId });
  };

  return (
    <Box p="4">
      <Heading mb="4">Watchlist</Heading>
      {watchlistMovies.length > 0 ? (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="4">
          {watchlistMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isAddedToWatchlist
              onWatchlistClick={handleRemoveFromWatchlist}
            />
          ))}
        </SimpleGrid>
      ) : (
        <Center>
          <Text>No movies in the watchlist.</Text>
        </Center>
      )}
    </Box>
  );
};

export default Watchlist;

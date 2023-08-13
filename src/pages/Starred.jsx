import React from 'react';
import { Box, Heading, SimpleGrid, Text, Center } from '@chakra-ui/react';
import { useMovieContext } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';

const Starred = () => {
  const { state, movies, dispatch } = useMovieContext();

  const starredMovies = movies.filter((movie) =>
    state.starredMovies.includes(movie.id)
  );

  const handleUnstarMovie = (movieId) => {
    dispatch({ type: 'UNSTAR_MOVIE', payload: movieId });
  };

  return (
    <Box p="4">
      <Heading mb="4">Starred Movies</Heading>
      {starredMovies.length > 0 ? (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="4">
          {starredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isStarred
              onStarClick={handleUnstarMovie}
            />
          ))}
        </SimpleGrid>
      ) : (
        <Center>
          <Text >No starred movies found.</Text>
        </Center>
      )}
    </Box>
  );
};

export default Starred;

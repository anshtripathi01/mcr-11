import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Image, Text, Button, Stack, Icon, Tag } from '@chakra-ui/react';
import { useMovieContext } from '../context/MovieContext';
import { FaStar, FaEye } from 'react-icons/fa';

const MovieCard = ({ movie }) => {
  const { state, dispatch } = useMovieContext();
  const isStarred = state.starredMovies.includes(movie.id);
  const isAddedToWatchlist = state.watchlist.includes(movie.id);

  const handleStarClick = () => {
    if (isStarred) {
      dispatch({ type: 'UNSTAR_MOVIE', payload: movie.id });
    } else {
      dispatch({ type: 'STAR_MOVIE', payload: movie.id });
    }
  };

  const handleWatchlistClick = () => {
    if (isAddedToWatchlist) {
      dispatch({ type: 'REMOVE_FROM_WATCHLIST', payload: movie.id });
    } else {
      dispatch({ type: 'ADD_TO_WATCHLIST', payload: movie.id });
    }
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="4" cursor="pointer" transition="transform 0.2s" _hover={{ transform: 'scale(1.02)' }}>
      <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
        <Image src={movie.imageURL} alt={movie.title} />
      </Link>
      <Text fontSize="xl" fontWeight="bold" mt="2">
        {movie.title}
      </Text>
      <Tag colorScheme="teal" mt="1" fontSize="sm">
        Year: {movie.year}
      </Tag>
      <Stack direction="row" mt="2" spacing="2" alignItems="center">
        <Icon as={FaStar} color={isStarred ? 'yellow.500' : 'gray.400'} />
        <Text>{movie.rating}</Text>
        <Button onClick={handleStarClick}>
          {isStarred ? 'Unstar' : 'Star'}
        </Button>
        <Button onClick={handleWatchlistClick}>
          {isAddedToWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
        </Button>
        <Link to={`/movie/${movie.id}`}>
          <Icon as={FaEye} />
        </Link>
      </Stack>
    </Box>
  );
};

export default MovieCard;

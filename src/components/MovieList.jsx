// components/MovieList.js
import React, { useEffect, useState } from 'react';
import { Flex, Heading, Input, SimpleGrid } from '@chakra-ui/react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {

    const [filterSearch, setFilterSearch] = useState([]);
  const [query, setQuery] = useState("");
  console.log(movies);
  const searchMovie = (query) => {
    setFilterSearch(
      movies?.filter(
        ({ title, summary }) =>
          title.toLowerCase().includes(query.toLowerCase()) ||
          summary.toLowerCase().includes(query.toLowerCase())
      )
    );
  };
  useEffect(() => {
    searchMovie(query);
    // eslint-disable-next-line
  }, [query]);

  return (
    <Flex flexDirection="column">
    <Input
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search movies"
        m="1rem"
        position="relative"
        top="-19.5rem"
        w="50%"
        textAlign="center"
        ml="15rem"
        color="#fff"
      />
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="4">
    {!filterSearch?.length && (
          <Heading size="md">No movies found !</Heading>
        )}
      {query ? filterSearch : movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </SimpleGrid>
    </Flex>
  );
};

export default MovieList;

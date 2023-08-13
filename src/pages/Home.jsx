import React, { useState } from 'react';
import { movies } from '../data/data';
import { Select, Button, VStack } from '@chakra-ui/react';
import MovieList from '../components/MovieList';

const Home = () => {
  const [genreFilter, setGenreFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const genres = Array.from(
    new Set(movies.flatMap((movie) => movie.genre))
  ).sort();
  const years = Array.from(
    new Set(movies.map((movie) => movie.year))
  ).sort((a, b) => b - a);
  const ratings = Array.from(
    new Set(movies.map((movie) => movie.rating))
  ).sort((a, b) => b - a);

  const applyFilters = () => {
    let filtered = movies;

    if (genreFilter) {
      filtered = filtered.filter((movie) =>
        movie.genre.includes(genreFilter)
      );
    }
    if (yearFilter) {
      filtered = filtered.filter((movie) => movie.year === parseInt(yearFilter));
    }
    if (ratingFilter) {
      filtered = filtered.filter(
        (movie) => movie.rating >= parseInt(ratingFilter)
      );
    }

    setFilteredMovies(filtered);
  };

  return (
    <VStack spacing="4">
      <Select
        placeholder="Select genre"
        value={genreFilter}
        onChange={(e) => setGenreFilter(e.target.value)}
      >
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </Select>
      <Select
        placeholder="Select year"
        value={yearFilter}
        onChange={(e) => setYearFilter(e.target.value)}
      >
        <option value="">All Years</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </Select>
      <Select
        placeholder="Select rating"
        value={ratingFilter}
        onChange={(e) => setRatingFilter(e.target.value)}
      >
        <option value="">All Ratings</option>
        {ratings.map((rating) => (
          <option key={rating} value={rating}>
            {rating}
          </option>
        ))}
      </Select>
      <Button onClick={applyFilters}>Apply Filters</Button>
      <MovieList movies={filteredMovies} />
    </VStack>
  );
};

export default Home;

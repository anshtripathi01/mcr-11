import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider, Box, Flex, ColorModeScript } from "@chakra-ui/react";
import { MovieProvider } from "./context/MovieContext";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Watchlist from "./pages/Watchlist";
import Starred from "./pages/Starred";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ChakraProvider>
      <ColorModeScript />
      <MovieProvider>
        <Router>
          <Box>
            <Navbar />
            <Flex p="4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<MovieDetail />} />
                <Route path="/watchlist" element={<Watchlist />} />
                <Route path="/starred" element={<Starred />} />
              </Routes>
            </Flex>
          </Box>
        </Router>
      </MovieProvider>
    </ChakraProvider>
  );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Spacer,
  IconButton,
  useColorMode,
  Tooltip,
} from "@chakra-ui/react";
import { FaHome, FaListUl, FaStar, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const linkColor = colorMode === "light" ? "gray.500" : "white";
  const iconColor = colorMode === "light" ? "gray.500" : "white";

  return (
    <Box bg="gray.900" p="4" boxShadow="md">
      <Flex align="center">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Flex align="center">
            <Text fontSize="xl" fontWeight="bold" color="white">
              🎬 Movie Rating App
            </Text>
          </Flex>
        </Link>
        <Spacer />
        <Flex align="center">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Tooltip label="Home">
              <Text
                color={linkColor}
                fontWeight="semibold"
                mr="2"
                _hover={{ textDecoration: "underline" }}
                colorScheme="gray.500"
              >
                <FaHome color={iconColor} size={18} />
                Home
              </Text>
            </Tooltip>
          </Link>
          <Link to="/watchlist" style={{ textDecoration: "none" }}>
            <Tooltip label="Watchlist">
              <Text
                color={linkColor}
                fontWeight="semibold"
                mr="2"
                _hover={{ textDecoration: "underline" }}
                colorScheme="gray.500"
              >
                <FaListUl color={iconColor} size={18} />
                Watchlist
              </Text>
            </Tooltip>
          </Link>
          <Link to="/starred" style={{ textDecoration: "none" }}>
            <Tooltip label="Starred">
              <Text
                color={linkColor}
                fontWeight="semibold"
                mr="2"
                _hover={{ textDecoration: "underline" }}
                colorScheme={colorMode === "light" ? "gray.500" : ""}
              >
                <FaStar color={iconColor} size={18} />
                Starred
              </Text>
            </Tooltip>
          </Link>
          <IconButton
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            aria-label="Toggle Dark Mode"
            variant="none"
            color="teal"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;

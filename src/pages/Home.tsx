import React from 'react';
import { Box, Button, Heading, useColorMode } from '@chakra-ui/react';

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box transitionDuration="100ms">
      <Heading>Home</Heading>
      <Button onClick={toggleColorMode}>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</Button>
    </Box>
  );
};

export default Home;

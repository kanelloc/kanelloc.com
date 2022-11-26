import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

const NotFound = () => {
  const navigate = useNavigate();

  const goToHome = (): void => {
    navigate('/');
  };

  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text">
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={'gray.500'} mb={6}>
        The page you&apos;re looking for does not seem to exist
      </Text>

      <Button colorScheme="teal" onClick={goToHome}>
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFound;

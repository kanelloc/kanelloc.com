import React from 'react';
import { Box, Container, Flex, Link, Text, useColorModeValue } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      borderTopWidth={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      width="100%"
      bottom={0}
      position="fixed">
      <Container as={Flex} py={4} alignItems="center" justifyContent="center">
        <Text fontSize="sm">
          Created with ❤️ with{' '}
          <Link color="teal" href="https://vitejs.dev" isExternal>
            Vite
          </Link>
          ,{' '}
          <Link color="teal" href="https://create-react-app.dev" isExternal>
            React.js
          </Link>{' '}
          &{' '}
          <Link color="teal" href="https://chakra-ui.com" isExternal>
            Chakra UI
          </Link>
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;

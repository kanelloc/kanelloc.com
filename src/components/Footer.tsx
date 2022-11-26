import React from 'react';
import { Box, Container, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import FooterLink from './FooterLink';

const Footer = () => (
  <Box
    borderTopWidth={1}
    borderStyle="solid"
    borderColor={useColorModeValue('gray.200', 'gray.700')}
    width="100%"
    bottom={0}
    position="fixed">
    <Container as={Flex} py={4} alignItems="center" justifyContent="center">
      <Text fontSize="sm">
        Created with ❤️ with <FooterLink href="https://vitejs.dev" label="Vite" />,{' '}
        <FooterLink href="https://create-react-app.dev" label="React.js" /> &{' '}
        <FooterLink label="Chakra UI" href="https://chakra-ui.com" />
      </Text>
    </Container>
  </Box>
);

export default Footer;

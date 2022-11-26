import type { ReactNode } from 'react';
import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <Box>
    <Box padding="1rem">
      <Header />
      <Box width="full" as="main" marginY="60px">
        {children}
      </Box>
    </Box>
    <Footer />
  </Box>
);

export default Layout;

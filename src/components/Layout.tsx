import React from 'react';
import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <Header />
      <Box width="full" as="main" marginY="60px">
        {children}
      </Box>
    </Box>
  );
};

export default Layout;

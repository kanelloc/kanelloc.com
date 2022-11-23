import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <Header />
      <Box width="full" as="main" marginY={22}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;

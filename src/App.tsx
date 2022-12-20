import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './lib/Routing';
import theme from './styles/Theme';
import Layout from './components/Layout';

const App = (): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Layout>
          <Routing />
        </Layout>
      </Router>
    </ChakraProvider>
  );
};

export default App;

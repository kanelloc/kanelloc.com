import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './lib/Routing';
import theme from './styles/Theme';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routing />
      </Router>
    </ChakraProvider>
  );
};

export default App;

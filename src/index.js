import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { extendTheme, ChakraProvider } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "#F7FAFC"
      }
    })
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>

);
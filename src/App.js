import React from 'react';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from '../src/styles/global';
import Home from '../src/pages/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <Home />
    </>
  );
}

export default App;

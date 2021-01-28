import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';

function Root() {
  return (
    <BrowserRouter>
      <MainTemplate />
    </BrowserRouter>
  );
}

export default Root;

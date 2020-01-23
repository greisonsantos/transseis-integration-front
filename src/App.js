import React, { Fragment } from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import GlobalStyle from './styles/Global'
import Routes from './routes'

import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter >
      <Fragment>
        <GlobalStyle />
        <Routes />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;

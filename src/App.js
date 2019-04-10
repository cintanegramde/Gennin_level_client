import React, { Component } from 'react';
import './App.css';
import TitleComponent from './TitleComponent';
import Login from './components/LoginView'
import Welcome from './components/Welcome'

import client from './graphQL'

import { ApolloProvider } from 'react-apollo'

import { BrowserRouter, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Route exact path='/' component={() => <Login client={client}/>} />
          <Route exact path='/home' component={Welcome} />
        </ApolloProvider>
      </BrowserRouter>
    );
  }
}

export default App;

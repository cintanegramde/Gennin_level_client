import React, { Component } from 'react';
import './App.css';
import TitleComponent from './TitleComponent';
import Login from './LoginView'

import client from './graphQL'

import { ApolloProvider } from 'react-apollo'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Login client={client}/>
      </ApolloProvider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import TitleComponent from './TitleComponent';
import Login from './LoginView'

import { ApolloProvider } from 'react-apollo'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <TitleComponent data={{ title: "Hoy jorgito ha visto", subTitle: "Por favor" }} />
        <button>button</button> */}


        <Login />

      </div>
    );
  }
}

export default App;

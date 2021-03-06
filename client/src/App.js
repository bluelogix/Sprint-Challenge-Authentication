import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './navbar/NavBar'
import Login from './auth/login'
import Jokes from './jokes/jokes'
import Register from './auth/register'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <NavBar />
       <main>
          <Route path='/login' component={Login} />
          <Route path='/jokes' component={Jokes} />
          <Route path='/register' component={Register} />
        </main>
      </div>
    );
  }
}

export default App;

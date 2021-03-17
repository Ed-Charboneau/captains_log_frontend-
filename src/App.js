import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link, Redirect } from 'react-router-dom';

import HomePage from './components/HomePage';
import Item from './components/Item';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      log: [],
      apiDataLoaded: false,
      num:null
    }
  }

  componentDidMount =  async () => {
    const response = await axios.get('http://localhost:3001/logs');
    console.log(response);
    this.setState({
      logs: response.data,
    })
  }

  render() {
    return (
      <div className="App">


        <main>
          <Route exact path="/" render = {() => (<HomePage />)}/>
          <Route exact path="/Item" render = {() => (<Item />)}/>

        </main>

      </div>
    );
  }
}

export default App;

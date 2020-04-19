import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import {SearchBox}  from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFeild: ''
    };

  }
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchFeild: e.target.value });
  }

  render() {
    const { monsters, searchFeild} = this.state;
    const filteredMonster= monsters.filter(monster =>(
      monster.name.toLowerCase().includes(searchFeild.toLowerCase())
      ));
    return (
      <div className="App">
        <h1>Monster App</h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange= {this.handleChange } 
          />
        <CardList monsters={filteredMonster}>
        </CardList>
      </div>
    )
  }
}


export default App;

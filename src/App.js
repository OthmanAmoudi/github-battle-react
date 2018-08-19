import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SelectedLanguage from './SelectedLanguage';
import Card from './Card';
import { BrowserRouter } from 'react-router-dom';
// import api from './utils/api';
var api = require('./utils/api');


class App extends Component {
  constructor(props) {
    super(props);

    this.handleLanguage = this.handleLanguage.bind(this);

    this.state = {
      selectedLanguage: 'All',
      repos: null
    };
  }

  componentDidMount() {
    this.handleLanguage(this.state.selectedLanguage);
  }

  handleLanguage(lang) {
    this.setState(() => {
      return {
        selectedLanguage: lang,
        repos: null
      };
    });

    api.fetchPopularRepos(lang).then(
      function(repos) {
        this.setState(() => {
          return {
            repos
          };
        });
      }.bind(this)
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* ***********   end of HEADER   ******** */}

        <SelectedLanguage
          selectedLanguage={this.state.selectedLanguage}
          handleLanguage={this.handleLanguage}
        />

        {!this.state.repos ? (
          <p>LOADING ...</p>
        ) : (
          <Card repos={this.state.repos} />
        )}
      </div>
    );
  }
}

export default App;

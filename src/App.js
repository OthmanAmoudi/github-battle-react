import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SelectedLanguage from './SelectedLanguage';
import Card from './Card';
// import api from './utils/api';
var api = require('./utils/api');

function RepoGrid(props) {
  return (
    <ul className="popular-list">
      {
        props.repos.map((repo, i) =>{
        return (
          <li key={repo.id} className="popular-item">
            <div className="popular-rank">#{i+1}</div>
              <ul className="space-list-items">
                <li>
                  <img src={repo.owner.avatar_url} alt={repo.name} className="avatar" />
                </li>

                <li>
                  <a href={repo.html_url}> {repo.name}</a>
                </li>

                <li>
                  <p> @{repo.owner.login}</p>
                </li>

                <li>
                  <p>{repo.stargazers_count} stars</p>
                </li>

              </ul>
          </li>
        )
        })
      }
    </ul>
  )
}
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

        { !this.state.repos ? <p>LOADING ...</p> :  <RepoGrid repos={this.state.repos} />}
      </div>
    );
  }
}

export default App;

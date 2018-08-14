import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleLanguage = this.handleLanguage.bind(this);

    this.state = {
      languages: ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'],
      selectedLanguage: 'All'
    };
  }

  handleLanguage(lang){
    this.setState(()=>{
      return {
        selectedLanguage: lang
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* ***********   end of HEADER   ******** */}
        <ul className="App-intro">
          {this.state.languages.map(lang => {
            return (
              <li
              className={this.state.selectedLanguage === lang ? "selected" : ""}
              key={lang} onClick={this.handleLanguage.bind(null,lang)}>
                {lang}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;

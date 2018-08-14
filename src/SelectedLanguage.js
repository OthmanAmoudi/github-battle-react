import React from 'react';

const SelectedLanguage = (props) => {
    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <ul className="App-intro">
        {languages.map(lang => {
          return (
            <li
              key={lang}
              className={props.selectedLanguage === lang ? 'selected' : ''}
              onClick={props.handleLanguage.bind(null, lang)}
            >
              {lang}
            </li>
          );
        })}
      </ul>
    );
}

export default SelectedLanguage;

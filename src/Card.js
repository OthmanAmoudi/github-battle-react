import React from 'react';

const Card = props => {
  return (
    <ul className="popular-list">
      {props.repos.map((repo, i) => {
        return (
          <li key={repo.id} className="popular-item">
            <div className="popular-rank">#{i + 1}</div>
            <ul className="space-list-items">
              <li>
                <img
                  src={repo.owner.avatar_url}
                  alt={repo.name}
                  className="avatar"
                />
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
        );
      })}
    </ul>
  );
};

export default Card;

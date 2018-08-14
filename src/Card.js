import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
    <p>#{props.number}</p>
      <img src={props.imgURL} alt={props.name}/>
      <a>{props.name}</a>
      <p>@{props.repoName}</p>
      <p>{props.stars} Stars</p>
    </div>
  );
}

export default Card;
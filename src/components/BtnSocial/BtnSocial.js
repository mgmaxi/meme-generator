import React from 'react';
import './btnSocial.css';

const btnSocial = ({ cardImage, url }) => {
  return (
    <div className="card-visual">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="card-img-container"
      >
        <img className="card-img" src={cardImage} alt="CardImage" />
      </a>
    </div>
  );
};

export default btnSocial;

import React from 'react';
import './index.css'

const Card = ({image, title, desc}) => {
  return (
      <div className='card'>
            <div>
                <img src={image} />
            </div>
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
      </div>
  )
};

export default Card;

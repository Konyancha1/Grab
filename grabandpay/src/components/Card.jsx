import React from 'react';

function Card({supermarket}) {
  return(
    <div>
      <button className="supermarkets">
        <img className="supermarketLogo" alt={supermarket.name} src={process.env.PUBLIC_URL + supermarket.imgPath} />
        <div className='supermarketName'>{supermarket.name}</div>
      </button>
    </div>
  );
}

export default Card;
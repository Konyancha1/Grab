import React from 'react';
import { useNavigate } from 'react-router-dom';

function Market({supermarket}){
  const navigate = useNavigate();
  const navigateToShop = () => {
    navigate('/shop');
  };
  return(
    <div>
      <button className="supermarkets" onClick={navigateToShop}>
        <img className="supermarketLogo" alt={supermarket.name} src={process.env.PUBLIC_URL + supermarket.imgPath} />
        <div className='supermarketName'>{supermarket.name}</div>
      </button>
    </div>
  );
}

export default Market;
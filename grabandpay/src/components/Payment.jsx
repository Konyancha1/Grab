import React from "react";
import Logo from '../images/App logo.png';
import List from './ShoppingList';
import { useNavigate } from "react-router-dom";
import { AiTwotoneDelete } from 'react-icons/ai';

export default function Payment(){
    const navigate = useNavigate();
    const navigateToPay = () => {
        navigate('/pay');
    };
    return (
        <div>
            <img src={Logo} alt='App Logo' className='app-logo'></img>
            <h1 className="title-1">ITEM</h1>
            <h1 className="title-2">PRICE</h1>
            <h1 className="title-3">DELETE</h1>
            <div>
                {List.map((data) => (
                    <div className="shopping-card" key={data.id}>
                        <h2 className="item-name">{data.item}</h2>
                        <h2 className="item-price">{data.price}</h2>
                        <div className="item-delete"><AiTwotoneDelete size='30px' /></div>
                    </div>
                ))}
                <button className="checkout" onClick={navigateToPay}>PROCEED TO CHECKOUT</button>
            </div>
        </div>
    );
}
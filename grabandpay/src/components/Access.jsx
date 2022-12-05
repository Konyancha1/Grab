import React from "react";
import Logo from '../images/App logo.png'
import { useNavigate } from "react-router-dom";


export default function ShopAccess(){
    const navigate = useNavigate();
    const navigateToCam = () => {
        navigate('/webcam');
    };
    return(
        <div>
            <img src={Logo} className='accessLogo' alt="logo"/>
            <button className="add" onClick={navigateToCam}>SCAN TO ADD</button>
        </div>
    );
}
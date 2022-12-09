import React from "react";
import Logo from '../images/App logo.png';

export default function Payment(){
    return (
        <div className="pay-page">
            <img src={Logo} alt='App Logo' className='app-logo'></img>
            <div className="phone">Enter Phone Number</div>
            <input type="text" className="phone-input" placeholder="0780322662"></input>
            <button className="pay">PAY</button>
        </div>
    );
}
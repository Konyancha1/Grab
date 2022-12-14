import React from "react";
import SearchBar from "./SearchBar";
import Details from "./Details";
import Logo from '../images/App logo.png';
import { Link } from "react-router-dom";

export default function Home(){
    return (
        <div>
            <img src={Logo} alt='App Logo' className='logo'></img>
            <SearchBar details={Details}/>
            <Link to='/admin' className="admin-page">ADMIN LOGIN</Link>
        </div>
    );
}
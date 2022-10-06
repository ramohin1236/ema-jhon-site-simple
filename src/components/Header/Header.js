import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        
           <nav className='header'>
              <img src={logo} alt=''></img>
              <div>
            <a href='/shop'>Shop</a>
            <a href='/orders'>orders</a>
            <a href='/inventories'>Inventories</a>
            <a href='/about'>About</a>
           </div>
            </nav> 
          
          
           
    );
};

export default Header;
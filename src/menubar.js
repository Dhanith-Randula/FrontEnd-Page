
import './menubar.css';
import React, { useState } from 'react';
import DarkMode from './DarkMode/DarkMode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';





function Menubar() {
  
  const [searchQuery, setSearchQuery] = useState('');



  const handleSearch = () => {
    
    console.log('Search query:', searchQuery);
  };

 
  return (
    <div className= 'backgroundmenu'>
      <text className='textfiledM'>ETCreations</text>
      
      <ul className="menu-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/service">Service</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
      <DarkMode />
      <div className="search-bar-a">
        <input

          className="search-bar-b"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-bar" onClick={handleSearch}>Search</button>
        
        
      </div>
      <FontAwesomeIcon 
      icon={faShoppingCart} 
      className="cart-icon" 
      onClick = {() => alert('Cart clicked!')}
      />
    </div>
  );
}

export default Menubar;


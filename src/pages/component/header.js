import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  return (
   <>
    <div>
      <span className='logo'><Link to="/" className='link'>House Staff</Link></span>
      <ul className='nav'>
        <li><Link to="/about" className='link'>Про нас</Link></li>
        <li><Link to="/contacts" className='link'>Контакты</Link></li>
      </ul> 
   </div>
   <div className='hr'></div>
   </>
  );
}

export default Header;

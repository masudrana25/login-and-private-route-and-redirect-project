import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav style={{height: '90px', backgroundColor: 'black', color: 'white' }}>
        <Link style={{padding: '10px',color: 'white' }} to='/home'>Home</Link>
        <Link style={{padding: '10px',color: 'white' }} to='/about'>About</Link>
        <Link style={{padding: '10px',color: 'white' }} to='/login'>Login</Link>
      </nav>
    </div>
  );
};

export default Header;
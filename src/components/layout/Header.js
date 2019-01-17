import React from 'react';
import { Link } from 'react-router-dom';

//STYLE
const headerStyle = {
  background: '#00004d',
  textAlign: 'center',
  padding: '8px 0'
}
const linkStyle = {
  margin: '5px 10px'
}
//Output
function Header() {
  return (
    <header style={headerStyle}>
      <h1>My Todo List</h1>
      <p>
        <Link to={'/'} style={linkStyle}>Home</Link>
        <Link to={'/about'} style={linkStyle}>About</Link>
      </p>
      </header>
  )
}

export default Header;

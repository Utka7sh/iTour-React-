import React from "react";
function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div id="nav-close" className="fas fa-times"></div>
        <a href="#home">Home</a>
        <a href="login.html" id="loginLink">Login</a>
        <a href="logout.html" id="logout">Logout</a>
        <a href="#category">Places</a>
        <a href="#maps">City Map</a>
        <a href="#Events">Events</a>
        <a href="#hotels">Hotels</a>
        <a href="#contact">Contact us</a>
      </nav>
      <div className="icons">
        <div id="menu-btn" className="fas fa-bars"></div>
      </div>
    </header>
  );
}

export default Header;

import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Hamburger.scss';
import { NAV } from '../../constants/appConstants';
import { getPathByName } from '../../routes/routerManager';

const MenuItem = ({ delay, children, onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="container item" style={{ animationDelay: delay }}>
      <div
        className="menuItem"
        style={{ color: hover ? 'gray' : '#fafafa', animationDelay: delay }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={onClick}
      >
        {children}
      </div>
      <div className="line" style={{ animationDelay: delay }} />
    </div>
  );
};

const Menu = ({ open, children }) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  if (!isOpen) {
    return null;
  }

  return <div className="menuList container">{children}</div>;
};

const MenuButton = ({ open, color, onClick }) => {
  return (
    <div
      style={{
        height: '40px',
        width: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        padding: '4px',
      }}
      onClick={onClick}
    >
      <div
        style={{
          height: '2px',
          width: '20px',
          background: color || '#777',
          transition: 'all 0.2s ease',
          transform: open ? 'rotate(45deg)' : 'none',
          transformOrigin: 'top left',
          marginBottom: '5px',
        }}
      />
      <div
        style={{
          height: '2px',
          width: '20px',
          background: color || '#777',
          transition: 'all 0.2s ease',
          opacity: open ? 0 : 1,
          transform: open ? 'translateX(-16px)' : 'none',
        }}
      />
      <div
        style={{
          height: '2px',
          width: '20px',
          background: color || '#777',
          transition: 'all 0.2s ease',
          transform: open ? 'translateX(-1px) rotate(-45deg)' : 'none',
          transformOrigin: 'top left',
          marginTop: '5px',
        }}
      />
    </div>
  );
};

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const menuItems = NAV.map((val, index) => (
    <MenuItem key={index} delay={`${index * 0.1}s`} onClick={handleLinkClick}>
      <NavLink to={getPathByName(val.route)} activeClassName="active" exact>
        {val.text}
      </NavLink>
    </MenuItem>
  ));

  return (
    <div className="hamburger">
      <div className="menuButton container">
        <MenuButton open={menuOpen} onClick={handleMenuClick} />
        <div className="logo">
          <span className="brandName">
            <span className="brandColor">D I</span>nnovations
          </span>
        </div>
      </div>
      <Menu open={menuOpen}>{menuItems}</Menu>
    </div>
  );
};

export default App;

import React from 'react';

import  useDarkMode  from './useDarkMode';

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode();
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };

    return (
      <nav className="navbar">
          <h1>Women's World Cup</h1>
        <div className="dark-mode__toggle">
          <button data-testid='toggle-button'
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
          >
          </button>
    
        </div>
      </nav>
    );
  };

  export default Navbar;

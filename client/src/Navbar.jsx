import React from 'react';
import { Link } from 'react-router-dom';

import  useDarkMode  from './useDarkMode';

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode();
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };

    return (
      <nav className="navbar">
          <Link to='/' className='text'>Women's World Cup</Link>
          {/* <Link to='/stretchapp'>Stretch App</Link> */}
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

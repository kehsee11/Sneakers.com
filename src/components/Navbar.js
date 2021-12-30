import React from 'react';
import LOGO from '../images/logo.svg';
import LOGO_DARK from '../images/logo-dark.svg';
import MENU from '../images/icon-menu.svg';
import CART from '../images/icon-cart.svg';
import AVATAR from '../images/image-avatar.png';
import { navigationLinks } from '../data/data';
import { useGlobalContext } from '../contextAPI/context';
import { MdDarkMode } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';

const Navbar = () => {
  const data = useGlobalContext();
  const { cart, handleShowCart, amount, handleOpenSidebar, theme, setTheme } =
    data;

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <nav>
      <div className='nav-header center'>
        <div className='d-flex'>
          <div className='flex-child child1'>
            {/* menu */}
            <button className='menu' onClick={handleOpenSidebar}>
              <img src={MENU} alt='hamburger menu' />
            </button>
            {/* logo */}
            {theme === 'light' ? (
              <div className='logo'>
                <img src={LOGO} alt='logo' />
              </div>
            ) : (
              <div className='logo'>
                <img src={LOGO_DARK} alt='logo' />
              </div>
            )}

            {/* nav */}
            <ul className='desktop-nav-list'>
              {navigationLinks.map((link) => {
                const { id, name } = link;
                return (
                  <li key={id} className='desktop-nav-item'>
                    <a href='#' className='desktop-nav-link'>
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='flex-child child2'>
            <button className='dsk-theme-btn' onClick={() => handleTheme()}>
              {theme === 'light' ? (
                <MdLightMode />
              ) : (
                <span className='dark_icon'>
                  <MdDarkMode />
                </span>
              )}
            </button>
            {/* CART ICON */}
            <button className='cart-icon' onClick={() => handleShowCart()}>
              <img src={CART} alt='cart icon' />
              <p
                className={`${
                  cart.length !== 0 ? 'cart-count show-count' : 'cart-count'
                }`}
              >
                {amount}
              </p>
            </button>

            {/* AVATAR */}
            <div className='user'>
              <img src={AVATAR} alt='avatar person' className='avatar' />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

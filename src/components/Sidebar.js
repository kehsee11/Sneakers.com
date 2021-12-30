import React from 'react';
import CLOSE_SIDEBAR from '../images/icon-close.svg';
import { navigationLinks } from '../data/data';
import { useGlobalContext } from '../contextAPI/context';
import { MdDarkMode } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';
const Sidebar = () => {
  const data = useGlobalContext();
  const { sidebar, handleCloseSidebar, theme, setTheme } = data;

  const closeSideBar = (e) => {
    if (e.target.classList.contains('show-sidebar')) {
      handleCloseSidebar();
    }
  };

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <aside
      className={`${sidebar ? 'show-sidebar' : null}`}
      onClick={closeSideBar}
    >
      <div className='sidebar slidein'>
        <div className='sidebar-header'>
          <div>
            <button onClick={() => handleCloseSidebar()}>
              <img src={CLOSE_SIDEBAR} alt='icon close' />
            </button>
          </div>
        </div>
        {/* links */}
        <ul className='mobile-nav-list'>
          {navigationLinks.map((link) => {
            const { id, name } = link;
            return (
              <li className='mobile-nav-item' key={id}>
                <a href='#' className='mobile-nav-link'>
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
        {/* theme buttons */}
        <div className='theme-wrapper'>
          <button className='theme-btn' onClick={() => handleTheme()}>
            {theme === 'light' ? (
              <>
                <span>
                  <MdLightMode />
                </span>
                dark mode
              </>
            ) : (
              <>
                <span className='mobile_dark_icon'>
                  <MdDarkMode />
                </span>
                light mode
              </>
            )}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

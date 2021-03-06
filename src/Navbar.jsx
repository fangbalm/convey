import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';

function Navbar({currentUser}) {
  const [sidebar, setSidebar] = useState(false);
  const defaultUser = "User"; 

  function showSidebar(){
    setSidebar(!sidebar);
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
         <div className="user-text">Welcome {currentUser ? currentUser.name : defaultUser}</div>
         {currentUser ? (<img src={"http://semantic-ui.com/images/avatar2/large/molly.png"} className="nav-image"
      />) : null}
         {/* <img src={"http://semantic-ui.com/images/avatar2/large/molly.png"} className="user-img"
      /> */}
         <div className="convey-logo">Convey</div>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {currentUser ? SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            }) : (
              <>
              <Link to="/login">Login</Link>
              </>
            )}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

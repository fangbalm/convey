import React from 'react';
// import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <GiIcons.GiBookshelf />,
    cName: 'nav-text'
  },
  {
    title: 'Journals',
    path: '/journals',
    icon: <GiIcons.GiBookshelf />,
    cName: 'nav-text'
  },
  {
    title: 'Explore',
    path: '/explore',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  }
  // {
  //   title: 'Messages',
  //   path: '/messages',
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Support',
  //   path: '/support',
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: 'nav-text'
  // }
];

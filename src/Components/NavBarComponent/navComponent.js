import React from 'react';

import LeftNavBarComponent from './LeftNavBar/LeftNavBarComponent';
import RightNavBarComponent from './RightNavBar/RightNavBarComponent';
import SeachComponent from './SearchBar/SeachComponent';

import './navComponent.css';

const NavComponent = ({ page, setPage }) => {
  return (
    <nav className="nav-bar">
      <LeftNavBarComponent />
      <SeachComponent page={page} setPage={setPage} />
      <RightNavBarComponent />
    </nav>
  );
};

export default React.memo(NavComponent);

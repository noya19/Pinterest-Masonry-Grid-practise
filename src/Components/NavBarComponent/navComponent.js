import LeftNavBarComponent from './LeftNavBar/LeftNavBarComponent';
import RightNavBarComponent from './RightNavBar/RightNavBarComponent';
import SeachComponent from './SearchBar/SeachComponent';

import './navComponent.css';

const NavComponent = () => {
  return (
    <nav className="nav-bar">
      <LeftNavBarComponent />
      <SeachComponent />
      <RightNavBarComponent />
    </nav>
  );
};

export default NavComponent;

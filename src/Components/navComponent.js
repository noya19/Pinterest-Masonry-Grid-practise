import { useState } from 'react';

import './navComponent.css';
import plogo from './Pinterest-logo.png';

const NavComponent = () => {
  const [isIconDisp, setIsIconDisp] = useState(true);
  const [buttonSelected, setButtonSelected] = useState(true);

  const onInputChangeHandler = () => {
    setIsIconDisp(false);
  };

  const onBlurChange = () => {
    setIsIconDisp(true);
  };

  const onClickedFirst = () => {
    setButtonSelected(true);
  };

  const onClickedSecond = () => {
    setButtonSelected(false);
  };

  return (
    <nav className="nav-bar">
      <div className="nav-bar_firstpart">
        <a href="hi" className="logo">
          <img src={plogo} alt="1"></img>
        </a>
        <button
          className={`${buttonSelected ? 'button_selected' : ''} `}
          onClick={onClickedFirst}
        >
          Home
        </button>
        <button
          className={`${!buttonSelected ? 'button_selected' : ''}`}
          onClick={onClickedSecond}
        >
          Today
        </button>
        <button>Create</button>
      </div>
      <div className={`search ${isIconDisp ? '' : 'addBorderHighlight'}`}>
        {isIconDisp && <i class="fas fa-search"></i>}
        <input
          type="search"
          onClick={onInputChangeHandler}
          onBlur={onBlurChange}
          placeholder="Search"
          className={`${isIconDisp ? '' : 'addPadding'}`}
        ></input>
      </div>
      <div className="nav-bar_secondpart">
        <a href="1" className="items">
          <i class="fas fa-bell">
            <div className="notification">
              <p>4</p>
            </div>
          </i>
        </a>
        <a href="1" className="items">
          <i class="fa fa-comment-dots"></i>
        </a>
        <a href="1" className="avatar">
          <div className="img">A</div>
        </a>
        <a href="1" className="drop-down">
          <i class="fas fa-chevron-down"></i>
        </a>
      </div>
    </nav>
  );
};

export default NavComponent;

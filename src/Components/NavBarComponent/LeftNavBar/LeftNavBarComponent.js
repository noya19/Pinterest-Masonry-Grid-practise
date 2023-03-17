import React, { useState } from 'react';

import DropDownComponent from '../../UI/DropDownComponent';
import plogo from '../../Pinterest-logo.png';
import classes from './LeftNavBarComponent.module.css';

const LeftNavBarComponent = () => {
  const [buttonSelected, setButtonSelected] = useState(true);
  const [enableDropDown, setEnableDropDown] = useState(false);

  const onClickedFirst = () => {
    setButtonSelected(true);
  };

  const onClickedSecond = () => {
    setButtonSelected(false);
  };

  const onDropdownClickHandler = () => {
    setEnableDropDown((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className={classes['nav-bar_firstpart']}>
      <a href="hi" className={classes.logo}>
        <img src={plogo} alt="1"></img>
      </a>
      <button
        className={`${buttonSelected ? classes.button_selected : ''} `}
        onClick={onClickedFirst}
      >
        Home
      </button>
      <button
        className={`${!buttonSelected ? classes.button_selected : ''}`}
        onClick={onClickedSecond}
      >
        Today
      </button>
      <div className={classes.createButton} onClick={onDropdownClickHandler}>
        <button>Create</button>
        <i className="fas fa-chevron-down"></i>
        {enableDropDown && (
          <DropDownComponent className={classes.createButton_action} />
        )}
      </div>
    </div>
  );
};

export default LeftNavBarComponent;

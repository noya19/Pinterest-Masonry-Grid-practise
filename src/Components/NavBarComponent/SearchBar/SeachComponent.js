import React, { useState } from 'react';
import classes from './SearchComponent.module.css';

const SeachComponent = () => {
  const [isIconDisp, setIsIconDisp] = useState(true);

  const onInputChangeHandler = (event) => {
    console.log(event.target.value);
    setIsIconDisp(false);
  };

  const onBlurChange = () => {
    setIsIconDisp(true);
  };

  return (
    <div
      className={`${classes.search} ${
        isIconDisp ? '' : classes.addBorderHighlight
      }`}
    >
      {isIconDisp && <i className="fas fa-search"></i>}
      <input
        type="search"
        onClick={onInputChangeHandler}
        onBlur={onBlurChange}
        placeholder="Search"
        className={`${isIconDisp ? '' : classes.addPadding}`}
      ></input>
    </div>
  );
};

export default SeachComponent;

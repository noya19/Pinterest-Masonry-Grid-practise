import React, { useState } from 'react';
import classes from './ContentBoxOptions.module.css';

const ContentBoxOptionsComponent = () => {
  const [createDropDownSelected, setCreateDropDownSelected] = useState(true);
  const [dropDownIsSelected, setDropDownIsSelected] = useState(false);
  return (
    <div className={classes.content_action}>
      <button
        onMouseOver={() => {
          setCreateDropDownSelected(true);
          setDropDownIsSelected(false);
        }}
        style={{
          backgroundColor: `${createDropDownSelected ? '#e5e5e5' : 'white'}`,
        }}
      >
        Remove Update
      </button>
      <button
        onMouseOver={() => {
          setDropDownIsSelected(true);
          setCreateDropDownSelected(false);
        }}
        style={{
          backgroundColor: `${dropDownIsSelected ? '#e5e5e5' : 'white'}`,
        }}
      >
        View Notification Settings
      </button>
    </div>
  );
};

export default ContentBoxOptionsComponent;

import React, { useState } from 'react';

const DropDownComponent = (props) => {
  const [createDropDownSelected, setCreateDropDownSelected] = useState(true);
  const [dropDownIsSelected, setDropDownIsSelected] = useState(false);
  return (
    <div className={props.className}>
      <button
        onMouseOver={() => {
          setCreateDropDownSelected(true);
          setDropDownIsSelected(false);
        }}
        style={{
          backgroundColor: `${createDropDownSelected ? '#e5e5e5' : 'white'}`,
        }}
      >
        Create Idea Pin
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
        Create Pin
      </button>
    </div>
  );
};

export default DropDownComponent;

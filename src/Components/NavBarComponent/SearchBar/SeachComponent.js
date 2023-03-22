import React, { useContext, useEffect, useState } from 'react';
import classes from './SearchComponent.module.css';
import listContext from '../../../store/list-context';

const SeachComponent = ({ page, setPage }) => {
  const [isIconDisp, setIsIconDisp] = useState(true);
  const [searchInput, setSearchInput] = useState();

  const listCtx = useContext(listContext);

  /*
  1. Get input from the seach bar
  2. set it to the state variable
  3. take a useEffect and make networkcalls
  4. Cleanup Function 
  */

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Uffect in search triggered', searchInput);
      // if the search input is empty don't make the network call.
      if (searchInput !== undefined && searchInput.trim().length !== 0) {
        listCtx.setList([], false);
        listCtx.configureSearch(true, searchInput);
      } else if (searchInput !== undefined) {
        // optimize this to take the last state and not make another API calls( unnecessary )
        listCtx.configureSearch(false, '');
        listCtx.setList([], false);
        setPage(1);
      }
    }, 1000);

    return () => {
      console.log('UseEffect in search cleaned');
      clearTimeout(timer);
    };
  }, [searchInput]);

  const onChangeHandler = (event) => {
    setSearchInput(event.target.value);
  };

  const onClickHandler = (event) => {
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
        onClick={onClickHandler}
        onBlur={onBlurChange}
        onChange={onChangeHandler}
        placeholder="Search"
        className={`${isIconDisp ? '' : classes.addPadding}`}
      ></input>
    </div>
  );
};

export default SeachComponent;

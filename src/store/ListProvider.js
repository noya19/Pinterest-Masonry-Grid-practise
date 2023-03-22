import React, { useState } from 'react';
import listContext from './list-context';

const ListProvider = (props) => {
  const [imageList, setImageList] = useState([]);
  const [search, setSearch] = useState({
    isSearch: false,
    searchVal: '',
  });

  const setNewList = (list, append) => {
    setImageList((prev) => {
      console.log('This is old array', prev);
      console.log('This is new array', list);
      return append ? [...prev, ...list] : [...list];
    });
  };

  const searchHandler = (flag, val) => {
    setSearch({
      isSearch: flag,
      searchVal: val,
    });
  };

  const mylist = {
    imageArr: imageList,
    setList: setNewList,
    search: search,
    configureSearch: searchHandler,
  };

  return (
    <listContext.Provider value={mylist}>{props.children}</listContext.Provider>
  );
};

export default ListProvider;

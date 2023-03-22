import React from 'react';

const listContext = React.createContext({
  imageArr: [],
  setList: (newlist, append) => {},
  search: {
    isSearch: Boolean,
    searchVal: String,
  },
  configureSearch: (flag, val) => {},
});

export default listContext;

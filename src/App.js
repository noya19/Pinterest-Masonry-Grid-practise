import React from 'react';
import ListProvider from './store/ListProvider';
import PinterestComponent from './PinterestComponent';

function App() {
  return (
    <ListProvider>
      <PinterestComponent />
    </ListProvider>
  );
}

export default App;

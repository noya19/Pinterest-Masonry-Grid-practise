import React from 'react';

import ImageComponent from '../ImageComponent/imageComponent';

const ImageGridComponent = ({ className, imageArr }, ref) => {
  return (
    <div className={className}>
      {imageArr.map((cur, idx) => {
        if (imageArr.length === idx + 1) {
          return <ImageComponent ref={ref} cur={cur} key={cur.id} />;
        } else {
          return <ImageComponent cur={cur} key={cur.id} />;
        }
      })}
    </div>
  );
};

export default React.forwardRef(ImageGridComponent);

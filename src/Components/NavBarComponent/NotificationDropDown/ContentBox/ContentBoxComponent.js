import React, { useState } from 'react';
import classes from './ContentBox.module.css';
import clsx from 'clsx';
import ContentBoxOptionsComponent from '../ContentBoxOptions/ContentBoxOptionsComponent';

const ContentBoxComponent = ({ text, images }) => {
  const [ishover, setisHover] = useState({
    img: false,
    options: false,
  });

  const [contentAction, setContentAction] = useState(false);

  const onMouse = () => {
    setisHover((prev) => {
      return {
        img: !prev.img,
        options: prev.options,
      };
    });
  };

  const onOptionsDisplay = () => {
    setisHover((prev) => {
      return {
        img: prev.img,
        options: !prev.options,
      };
    });
  };

  const onOptionsClickHandler = (event) => {
    event.preventDefault();
    setContentAction((prev) => {
      return !prev;
    });
  };

  const src = ishover.img
    ? 'https://img.icons8.com/ios-glyphs/40/FFFFFF/ellipsis.png'
    : 'https://cdn-icons-png.flaticon.com/512/512/512142.png';

  return (
    <div
      className={classes.contentContainer}
      onMouseOver={onOptionsDisplay}
      onMouseOut={onOptionsDisplay}
    >
      <header>
        <p>{text}</p>
        <div>
          {ishover.options && (
            <button
              className={clsx([classes.roundButton])}
              onMouseOver={onMouse}
              onMouseOut={onMouse}
              onClick={onOptionsClickHandler}
            >
              <img src={src} alt="" />
            </button>
          )}
          {contentAction && <ContentBoxOptionsComponent />}
        </div>
      </header>
      <div className={classes.contentPictures}>
        {images.map((cur) => {
          return <img key={cur.id} src={cur.src} alt="Hello" />;
        })}
      </div>
    </div>
  );
};

export default ContentBoxComponent;

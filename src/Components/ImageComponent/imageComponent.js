import './cardStyle.css';
import React from 'react';

const ImageComponent = ({ cur }, ref) => {
  return (
    <div ref={ref} className="content-box">
      <div className="card-component">
        <div className="overlay">
          <div>
            <p>Creator</p>
            <button className="save-button">Save</button>
          </div>
          <div>
            <button className="round-button">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3580/3580382.png"
                alt=""
              />
            </button>
            <button className="round-button">
              <img
                src="https://cdn-icons-png.flaticon.com/512/512/512142.png"
                alt=""
              />
            </button>
          </div>
        </div>
        <img
          className="image_element"
          key={cur.id}
          alt={cur.desc}
          src={cur.src}
        ></img>
      </div>
      {cur.desc && <p>{cur.desc}</p>}
      <div className="content-box_footer">
        {cur.prof_src && <img src={cur.prof_src} alt="hey"></img>}
        {cur.prof_name && <p>{cur.prof_name}</p>}
      </div>
    </div>
  );
};
export default React.forwardRef(ImageComponent);

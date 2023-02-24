import './cardStyle.css';

const CardComponent = ({ cur }) => {
  return (
    <div className="content-box">
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
          key={cur}
          alt={cur}
          src={`https://source.unsplash.com/random/architecture-interior&${
            Math.random() * 1000
          }`}
        ></img>
      </div>
      <p> Image Description</p>
    </div>
  );
};
export default CardComponent;

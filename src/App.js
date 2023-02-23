import './App.css';

const imgArr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 1, 20,
];

function App() {
  return (
    <div className="pinterest_container">
      <div class="columns-1 md:columns-2 lg:columns-3 ">
        {imgArr.map((cur) => {
          return (
            <img
              class="image_element"
              key={cur}
              alt={cur}
              src={`https://source.unsplash.com/random/architecture-interior&${
                Math.random() * 1000
              }`}
            ></img>
          );
        })}
      </div>
    </div>
  );
}

export default App;

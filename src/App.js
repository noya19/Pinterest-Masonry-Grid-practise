import './App.css';
import CardComponent from './Components/cardComponent';

const imgArr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 1, 20, 21, 22, 23,
  24,
];

function App() {
  return (
    <div className="pinterest_container">
      {imgArr.map((cur) => {
        return <CardComponent cur={cur} />;
      })}
    </div>
  );
}

export default App;

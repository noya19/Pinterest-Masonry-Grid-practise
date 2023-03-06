import './App.css';
import CardComponent from './Components/cardComponent';
import NavComponent from './Components/navComponent';

// const imgArr = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 1, 20, 21, 22, 23,
//   24,
// ];

const imgArr = [
  {
    id: 1,
    src: `https://source.unsplash.com/random/architecture-interior&${
      Math.random() * 1000
    }`,
    prof: 'Nads',
  },
  {
    id: 2,
    desc: 'Hey soul Sister ! 😁',
    src: `https://source.unsplash.com/random/architecture-interior&${
      Math.random() * 1000
    }`,
    prof: 'Nads',
  },
  {
    id: 3,
    desc: 'Hey soul Sister ! 😁',
  },
  {
    id: 4,
    desc: 'Hey soul Sister ! 😁',
    src: `https://source.unsplash.com/random/architecture-interior&${
      Math.random() * 1000
    }`,
    prof: 'Nads',
  },
  {
    id: 6,
    desc: 'Hey soul Sister ! 😁',
    src: `https://source.unsplash.com/random/architecture-interior&${
      Math.random() * 1000
    }`,
    prof: 'Nads',
  },
  {
    id: 7,
    desc: 'Hey soul Sister ! 😁',
    src: `https://source.unsplash.com/random/architecture-interior&${
      Math.random() * 1000
    }`,
    prof: 'Nads',
  },
  {
    id: 8,
    desc: 'Hey soul Sister ! 😁',
    src: `https://source.unsplash.com/random/architecture-interior&${
      Math.random() * 1000
    }`,
    prof: 'Nads',
  },
  {
    id: 9,
    desc: 'Hey soul Sister ! 😁',
    src: `https://source.unsplash.com/random/architecture-interior&${
      Math.random() * 1000
    }`,
    prof: 'Nads',
  },
  {
    id: 10,
    desc: 'Hey soul Sister ! 😁',
    src: `https://source.unsplash.com/random/architecture-interior&${
      Math.random() * 1000
    }`,
    prof: 'Nads',
  },
  {
    id: 11,
    desc: 'Hey soul Sister ! 😁',
    src: `https://source.unsplash.com/random/architecture-interior&${
      Math.random() * 1000
    }`,
    prof: 'Nads',
  },
  {
    id: 12,
    desc: 'Hey soul Sister ! 😁',
    src: `https://source.unsplash.com/random/architecture-interior&${
      Math.random() * 1000
    }`,
    prof: 'Nads',
  },
  {
    id: 13,
    desc: 'Hey soul Sister ! 😁',
    src: `https://source.unsplash.com/random/architecture-interior&${
      Math.random() * 1000
    }`,
    prof: 'Nads',
  },
  {
    id: 14,
    desc: 'Hey soul Sister ! 😁',
    src: `https://source.unsplash.com/random/architecture-interior&${
      Math.random() * 1000
    }`,
    prof: 'Nads',
  },
  {
    id: 15,
    desc: 'Hey soul Sister ! 😁',
    src: `https://source.unsplash.com/random/architecture-interior&${
      Math.random() * 1000
    }`,
    prof: 'Nads',
  },
  {
    id: 16,
    desc: 'Hey soul Sister ! 😁',
    src: `https://source.unsplash.com/random/architecture-interior&${
      Math.random() * 1000
    }`,
    prof: 'Nads',
  },
  {
    id: 17,
    desc: 'Hey soul Sister ! 😁',
    src: `https://source.unsplash.com/random/architecture-interior&${
      Math.random() * 1000
    }`,
    prof: 'Nads',
  },
  {
    id: 18,
    desc: 'Hey soul Sister ! 😁',
    src: `https://source.unsplash.com/random/architecture-interior&${
      Math.random() * 1000
    }`,
    prof: 'Nads',
  },
  {
    id: 19,
    desc: 'Hey soul Sister ! 😁',
    src: `https://source.unsplash.com/random/architecture-interior&${
      Math.random() * 1000
    }`,
    prof: 'Nads',
  },
  {
    id: 20,
    desc: 'Hey soul Sister ! 😁',
    src: `https://source.unsplash.com/random/architecture-interior&${
      Math.random() * 1000
    }`,
    prof: 'Nads',
  },
  {
    id: 21,
    desc: 'Hey soul Sister ! 😁',
    src: `https://source.unsplash.com/random/architecture-interior&${
      Math.random() * 1000
    }`,
    prof: 'Nads',
  },
  {
    id: 22,
    desc: 'Hey soul Sister ! 😁',
    src: `https://source.unsplash.com/random/architecture-interior&${
      Math.random() * 1000
    }`,
    prof: 'Nads',
  },
  {
    id: 23,
    desc: 'Hey soul Sister ! 😁',
    src: `https://source.unsplash.com/random/architecture-interior&${
      Math.random() * 1000
    }`,
    prof: 'Nads',
  },
  {
    id: 24,
    desc: 'Hey soul Sister ! 😁',
    src: `https://source.unsplash.com/random/architecture-interior&${
      Math.random() * 1000
    }`,
    prof: 'Nads',
  },
];

function App() {
  return (
    <>
      <NavComponent />
      <div className="pinterest_container">
        {imgArr.map((cur) => {
          return <CardComponent cur={cur} />;
        })}
      </div>
    </>
  );
}

export default App;

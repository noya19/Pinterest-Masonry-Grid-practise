import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import NavComponent from './Components/NavBarComponent/navComponent';
import ImageGridComponent from './Components/ImageGridComponent/ImageGridComponent';

function App() {
  const [imageArr, setImageArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const observer = useRef();
  const lastImageElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => {
            return prevPage + 1;
          });
          console.log('Reached the end');
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading]
  );

  useEffect(() => {
    console.log('Reached UseEffect here');
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/?client_id=ekLLkOG20mQXhq9C9stqsNpV7YWRqE3raYPssBaNeJY&page=${page}&per_page=30`,
          {
            method: 'GET',
          }
        );
        if (!response.ok) {
          throw new Error('Something went wrong');
        }

        const data = await response.json();
        // console.log(data);
        const loadedData = [];
        for (const item of data) {
          loadedData.push({
            id: item.id,
            desc: item.description ? item.description : item.alt_description,
            src: item.urls.small,
            prof_src: item.user.profile_image.small,
            prof_name: item.user.first_name,
          });
        }

        setImageArr((previousArray) => {
          console.log('This is old array', previousArray);
          console.log('This is new array', loadedData);
          return [...previousArray, ...loadedData];
        });

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchImages();
    setIsLoading(false);
  }, [page]);

  return (
    <>
      <NavComponent />
      {isLoading && <p>Loading....</p>}
      {!isLoading && (
        <ImageGridComponent
          className={'pinterest_container'}
          imageArr={imageArr}
          ref={lastImageElementRef}
        />
      )}
    </>
  );
}

export default App;

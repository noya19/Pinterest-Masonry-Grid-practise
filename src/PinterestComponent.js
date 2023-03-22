import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import './PinterestComponent.css';
import NavComponent from './Components/NavBarComponent/navComponent';
import ImageGridComponent from './Components/ImageGridComponent/ImageGridComponent';
import listContext from './store/list-context';

function PinterestComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const listCtx = useContext(listContext);

  const observer = useRef();
  const lastImageElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setPage((prevPage) => {
              return prevPage + 1;
            });
            console.log('Reached the end');
          }
        },
        {
          rootMargin: '300px',
        }
      );
      if (node) observer.current.observe(node);
    },
    [isLoading]
  );

  useEffect(() => {
    console.log('Reached UseEffect here: Network Call made');
    const url = listCtx.search.isSearch
      ? `https://api.unsplash.com/search/photos?client_id=ekLLkOG20mQXhq9C9stqsNpV7YWRqE3raYPssBaNeJY&page=${page}&per_page=30&query=${listCtx.search.searchVal}`
      : `https://api.unsplash.com/photos/?client_id=ekLLkOG20mQXhq9C9stqsNpV7YWRqE3raYPssBaNeJY&page=${page}&per_page=30`;

    const fetchImages = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET',
        });
        if (!response.ok) {
          throw new Error('Something went wrong');
        }

        let data = await response.json();
        data = listCtx.search.isSearch ? data.results : data;

        const loadedData = [];
        for (const item of data) {
          loadedData.push({
            id: crypto.randomUUID(),
            desc: item.description ? item.description : item.alt_description,
            src: item.urls.small,
            prof_src: item.user.profile_image.small,
            prof_name: item.user.first_name,
          });
        }

        listCtx.setList(loadedData, true);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchImages();
    setIsLoading(false);
  }, [listCtx.search.isSearch, listCtx.search.searchVal, page]);

  return (
    <>
      <NavComponent page={page} setPage={setPage} />
      {isLoading && <p>Loading....</p>}
      {!isLoading && (
        <ImageGridComponent
          className={'pinterest_container'}
          imageArr={listCtx.imageArr}
          ref={lastImageElementRef}
        />
      )}
    </>
  );
}

export default PinterestComponent;

import React, { useEffect, useState } from 'react';
import classes from './NotiDropdown.module.css';
import ContentBoxComponent from './ContentBox/ContentBoxComponent';

const NotiDropdownComponent = () => {
  const [dataContent, setDataContent] = useState([]);

  useEffect(() => {
    console.log('Use effect ran in NotiDropDownComponent');

    const moods = [
      {
        id: '1',
        text: '50 Phone Background Pins You might like 12hrs',
        imgArray: [],
      },
      {
        id: '2',
        text: '50 Phone Background Pins You might like 12hrs',
        imgArray: [],
      },
      {
        id: '3',
        text: '50 Phone Background Pins You might like 12hrs',
        imgArray: [],
      },
      {
        id: '4',
        text: '50 Phone Background Pins You might like 12hrs',
        imgArray: [],
      },
      {
        id: '5',
        text: '50 Phone Background Pins You might like 12hrs',
        imgArray: [],
      },
      {
        id: '6',
        text: '50 Phone Background Pins You might like 12hrs',
        imgArray: [],
      },
      {
        id: '7',
        text: '50 Phone Background Pins You might like 12hrs',
        imgArray: [],
      },
      {
        id: '8',
        text: '50 Phone Background Pins You might like 12hrs',
        imgArray: [],
      },
    ];

    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/?client_id=ekLLkOG20mQXhq9C9stqsNpV7YWRqE3raYPssBaNeJY&page=1&per_page=24`,
          {
            method: 'GET',
          }
        );
        if (!response.ok) {
          throw new Error('Something went wrong');
        }

        const data = await response.json();

        let insertidx = 0;
        data.forEach((cur, idx) => {
          if (idx !== 0 && idx % 3 === 0) insertidx += 1;
          let myitem = moods[insertidx];
          myitem.imgArray.push({
            id: cur.id,
            src: cur.urls.small,
          });
        });

        setDataContent(moods);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className={classes.dropdown}>
      <header>
        <p>Updates</p>
      </header>
      <div className={classes.moodImages}>
        {dataContent.map((cur) => {
          return (
            <ContentBoxComponent
              key={cur.id}
              text={cur.text}
              images={cur.imgArray}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NotiDropdownComponent;

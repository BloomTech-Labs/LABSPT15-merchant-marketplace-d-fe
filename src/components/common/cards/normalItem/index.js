import { useOktaAuth } from '@okta/okta-react';
import React, { useEffect, useState } from 'react';
import { getDSData } from '../../../../api';
import './itemCardStyles.css';

function ItemCard({ name, description, price, image, count }) {
  const [img, setImg] = useState('');
  const { authState } = useOktaAuth();
  let dollars = price / 100;
  const imgGet = id => {
    getDSData(`${process.env.REACT_APP_API_URI}photo/${id}`, authState)
      .then(res => setImg(res[0]['url']))
      .catch(err => {
        console.log('Img get fail.');
      });
  };
  useEffect(() => {
    imgGet(image);
  }, []);

  return (
    <div className="cardContainer">
      <img src={img} className="cardImage" />
      <div className="cardDesc">
        <h2 className="descText">{name}</h2>
        <p className="descText" activeStyle={{ color: 'black' }}>
          {description}
        </p>
      </div>
      <div>
        <h2 className="cardPrice">${dollars}</h2>
        {count !== 0 ? (
          <h2 style={{ color: 'green' }}>QTY: {count}</h2>
        ) : (
          <h2 style={{ color: 'red' }}>QTY: {count}</h2>
        )}
      </div>
    </div>
  );
}

export default ItemCard;

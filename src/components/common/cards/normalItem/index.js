import { useOktaAuth } from '@okta/okta-react';
import React, { useEffect, useState } from 'react';
import { getDSData } from '../../../../api';
import './itemCardStyles.css';

function ItemCard({ name, description, price, image, count }) {
  const [img, setImg] = useState('');
  const { authState } = useOktaAuth();
  const imgGet = id => {
    getDSData(`http://localhost:8000/photo/${id}`, authState)
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
        <p className="descText">{description}</p>
      </div>
      <div>
        <h2 className="cardPrice">${price}</h2>
        <h2># {count}</h2>
      </div>
    </div>
  );
}

export default ItemCard;

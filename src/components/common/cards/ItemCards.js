import React from 'react';
import { Card } from 'antd';
import './itemCardStyles.css';

function ItemCard(props) {
  return (
    <Card className="itemCard">
      <div className="cardContents">
        <div className="desc">
          <div className="placeHolderIMG">Temp</div>
          <div className="descText">
            <h3>Fake Product</h3>
            <p>Description </p>
          </div>
        </div>

        <div>
          <h3>$00.00</h3>
        </div>
      </div>
    </Card>
  );
}

export default ItemCard;

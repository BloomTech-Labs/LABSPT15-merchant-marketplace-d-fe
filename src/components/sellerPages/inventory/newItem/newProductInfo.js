import { useOktaAuth } from '@okta/okta-react';
import React, { useEffect, useState } from 'react';
import { Rate, Avatar, Tag } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';

const NewProductInfo = ({ photos, mainInfo, specForm }) => {
  const [img, setImg] = useState('');
  const { authState } = useOktaAuth();

  let dollars = mainInfo.price;

  useEffect(() => {
    setImg(
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Feb%2FAsh_Tree_-_geograph.org.uk_-_590710.jpg%2F220px-Ash_Tree_-_geograph.org.uk_-_590710.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTree&tbnid=43XoZSLI7MfEHM&vet=12ahUKEwiGzZrr6r3uAhXDsFMKHU2jA3YQMygAegUIARDTAQ..i&docid=wHCoEH9G9w_hKM&w=220&h=293&q=tree&safe=off&ved=2ahUKEwiGzZrr6r3uAhXDsFMKHU2jA3YQMygAegUIARDTAQ'
    );
  }, []);

  return (
    <div className="product-page">
      <div className="product-container">
        <div>
          <img src={img} />
        </div>

        <div className="item">
          <div className="name-price">
            <p>{mainInfo.name}</p>
            <p>${dollars}</p>
          </div>
          <div className="rating">
            <Rate />
          </div>
          <div className="store-name">
            <Avatar size="small" icon={<GlobalOutlined />} />
            <h3>Store Name</h3>
          </div>
          <p>location</p>
          <section>
            <p>{mainInfo.description}</p>
            {mainInfo.quantity_available !== 0 ? (
              <h2 style={{ color: 'green' }}>
                QTY: {mainInfo.quantity_available}
              </h2>
            ) : (
              <h2 style={{ color: 'red' }}>
                QTY: {mainInfo.quantity_available}
              </h2>
            )}
          </section>
        </div>
      </div>
      <section className="tags-container">
        <Tag className="tags">Tag</Tag>
        <Tag className="tags">Tag</Tag>
        <Tag className="tags">Tag</Tag>
        <Tag className="tags">Tag</Tag>
      </section>
    </div>
  );
};

export default NewProductInfo;

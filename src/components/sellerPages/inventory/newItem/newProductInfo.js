import { useOktaAuth } from "@okta/okta-react";
import React, { useEffect, useState } from "react";
import { Rate, Avatar, Tag } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

const NewProductInfo = ({ photo, mainInfo, specForm }) => {
  let dollars = mainInfo.price;

  return (
    <div className="product-page">
      <div className="product-container">
        <div>
          <img src={photo} />
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
              <h2 style={{ color: "green" }}>
                QTY: {mainInfo.quantity_available}
              </h2>
            ) : (
              <h2 style={{ color: "red" }}>
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

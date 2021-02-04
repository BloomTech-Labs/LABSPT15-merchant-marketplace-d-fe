import { useOktaAuth } from "@okta/okta-react";
import React, { useEffect, useState } from "react";
import { Rate, Avatar, Tag, Switch, Typography } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

const NewProductInfo = ({ photo, mainInfo, specForm, setPublished }) => {
  let dollars = mainInfo.price_in_cents;
  let { Text } = Typography;
  const [switchButton, setSwitchButton] = useState(true);

  let switchText = {
    publish:
      "This Product will be saved and will be published to the site right away",
    hide:
      "This Product will be saved but it wont be published right now, you can publish it later"
  };

  function onChangeSwitch(checked) {
    setPublished(checked);
    setSwitchButton(checked);
  }
  return (
    <div className="product-page">
      <div className="product-container">
        <Text strong>
          {switchButton ? switchText.publish : switchText.hide}
          <Switch
            defaultChecked
            checkedChildren="Publish"
            unCheckedChildren="Hide it"
            onChange={onChangeSwitch}
          />
        </Text>
        <div>
          <img src={photo} />
        </div>

        <div className="item">
          <div className="name-price">
            <p>{mainInfo.item_name}</p>
          </div>
          <section>
            <p>{mainInfo.description}</p>
            {mainInfo.quantity_available !== 0 ? (
              <h3 style={{ color: "green" }}>
                QTY: {mainInfo.quantity_available}
              </h3>
            ) : (
              <h3 style={{ color: "red" }}>
                QTY: {mainInfo.quantity_available}
              </h3>
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

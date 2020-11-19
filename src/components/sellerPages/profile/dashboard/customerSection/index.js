import React from 'react';
import SmallItemCard from '../../../../common/cards/smallItem';
import { WechatOutlined, PlusOutlined } from '@ant-design/icons';
import './customStyles.css';

function CustomerSection() {
  return (
    <>
      <div className="customerHeader">
        <h2>Customers</h2>
        <div>
          <WechatOutlined />
          <PlusOutlined />
        </div>
      </div>

      <p>Information</p>
      <SmallItemCard headerText={36} descText="Customers" />
    </>
  );
}

export default CustomerSection;

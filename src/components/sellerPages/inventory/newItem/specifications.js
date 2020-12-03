import React from 'react';
import '../inventoryStyles.css';
import { Form, Input } from 'antd';
import FormButton from '../../../common/FormButton/FormButton';

function MoreInfo(props) {
  const onFinish = values => {
    props.setData(values);
  };

  const AddDetail = () => {
    console.log('Add Detail');
  };

  return (
    <div className="contents">
      <h1>Specifications</h1>
      <p>
        Buyers are more likely to buy an item that is described well. Add
        specific details about your product here. These details should be short
        and clear. Examples include weight, material, size, color, main purpose,
        etc.
      </p>
      <Form onFinish={onFinish}>
        <section className="spec-inputs">
          <Form.Item name="specification">
            <Input placeholder="Add a detail" />
          </Form.Item>
          <div className="supplement-detail" onClick={AddDetail}>
            + Add another detail
          </div>
        </section>
        <FormButton
          setProgress={props.setProgress}
          slider={props.slider}
          progressPercent={40}
        />
      </Form>
    </div>
  );
}

export default MoreInfo;

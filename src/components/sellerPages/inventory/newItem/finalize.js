import { Button } from 'antd';
import React, { useState } from 'react';
import { Form, Popover, InputNumber } from 'antd';
import ItemCard from '../../../common/cards/ItemCards';
import { Link } from 'react-router-dom';

function Finalize(props) {
  const [price, setPrice] = useState();

  const [form] = Form.useForm();

  const onFinish = values => {
    props.setData(values);
  };

  const formConfirm = () => {
    props.formCosolidate();
  };

  const onChange = values => {
    setPrice(values.price);
    console.log(values.price);
    console.log(price);
  };

  const popoverContent = (
    <div className="popContent">
      <h2>What would you like to do with this item?</h2>
      <Link to="/inventory">
        <Button
          onMouseEnter={() => {
            props.setStatus('');
            props.setProgress(100);
          }}
          onClick={() => {
            formConfirm();
          }}
        >
          Create and Stock Item
        </Button>
      </Link>
      <Link to="/inventory">
        <Button
          onMouseEnter={() => {
            props.setStatus('active');
            props.setProgress(90);
          }}
        >
          Save Item as Draft
        </Button>
      </Link>
      <Link to="/inventory">
        <Button
          onMouseEnter={() => {
            props.setStatus('exception');
            props.setProgress(0);
          }}
        >
          Cancel
        </Button>
      </Link>
    </div>
  );

  return (
    <div className="contents">
      <h1>Price</h1>
      <ItemCard
        price={price}
        name={props.product.name}
        description={props.product.description}
      />
      <Form form={form} onFieldsChange={onChange} onFinish={onFinish}>
        <Form.Item name="price">
          <InputNumber />
        </Form.Item>
        <Form.Item>
          <Popover content={popoverContent}>
            <Button
              htmlType="submit"
              onMouseEnter={() => {
                props.setProgress(80);
                props.setData(form.getFieldsValue);
              }}
            >
              Confirm and Continue
            </Button>
          </Popover>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Finalize;

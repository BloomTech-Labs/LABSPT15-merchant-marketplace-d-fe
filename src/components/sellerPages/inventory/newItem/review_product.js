import { Button } from 'antd';
import React from 'react';
import { Form } from 'antd';
// May remove, I need to figure out passing props
import PopContent from './popContent';
import ProductInfo from '../../../pages/ProductInfo/ProductInfo';

function Finalize(props) {
  const [form] = Form.useForm();

  const ShowPopContent = () => {
    return (
      <>
        <PopContent />
      </>
    );
  };
  return (
    <div className="contents">
      <ProductInfo />
      <Button>Cancel</Button>
      <Form form={form}>
        <Form.Item>
          <Button
            htmlType="submit"
            onClick={() => {
              ShowPopContent();
            }}
          >
            Save Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Finalize;

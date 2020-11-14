import React from 'react';
import '../inventoryStyles.css';
import { Form, Input, Button } from 'antd';

function MoreInfo(props) {
  const onFinish = values => {
    props.setData(values);
  };

  return (
    <div className="contents">
      <h1>More Information</h1>
      <Form onFinish={onFinish}>
        <Form.Item name="full_description">
          <Input.TextArea placeholder="Full Description" />
        </Form.Item>
        <Form.Item name="custom_tags">
          <Input placeholder="Tags/Keywords" />
        </Form.Item>
        <Button
          htmlType="submit"
          onClick={() => {
            props.setProgress(40);
            props.slider.current.next();
          }}
        >
          Next
        </Button>
      </Form>
    </div>
  );
}

export default MoreInfo;

import React from 'react';
import { Progress, Form, Input, Button, Cascader } from 'antd';
import '../inventoryStyles.css';
import { useHistory } from 'react-router-dom';

function NewItem(props) {
  const history = useHistory();

  return (
    <div>
      <div className="contents">
        <Progress percent={20} status="active" />

        <h1>Main Information</h1>
        <Form>
          <Form.Item>
            <Input placeholder="Name of Item" />
          </Form.Item>
          <Form.Item>
            <Input.TextArea placeholder="Short Description (Max 140 Characters)" />
          </Form.Item>
          <Form.Item>
            <Cascader />
          </Form.Item>
          <Form.Item>
            <Button
              onClick={() => {
                history.push('newitem/moreinfo');
              }}
            >
              Next
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default NewItem;

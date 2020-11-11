import { Progress } from 'antd';
import React from 'react';
import '../inventoryStyles.css';
import { Form, Input, Button } from 'antd';
import { useHistory } from 'react-router-dom';

function MoreInfo(props) {
  const history = useHistory();
  return (
    <div className="contents">
      <Progress percent={40} status="active" />
      <h1>More Information</h1>
      <Form>
        <Form.Item>
          <Input.TextArea placeholder="Full Description" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="Tags/Keywords" />
        </Form.Item>
        <Button
          onClick={() => {
            history.push('moreinfo/photos');
          }}
        >
          Next
        </Button>
      </Form>
    </div>
  );
}

export default MoreInfo;

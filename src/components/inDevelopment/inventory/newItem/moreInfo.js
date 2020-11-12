import React from 'react';
import ProgressBar from '../../../common/progressBar/progressBar';
import '../inventoryStyles.css';
import { Form, Input, Button } from 'antd';
import { useHistory } from 'react-router-dom';

function MoreInfo(props) {
  const history = useHistory();
  return (
    <div className="outerContainer">
      <ProgressBar percent={40} status="active" />
      <div className="contents">
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
    </div>
  );
}

export default MoreInfo;

import { Button, Input, Progress } from 'antd';
import React, { useState } from 'react';
import { Form, Popover, InputNumber } from 'antd';
import ItemCard from '../../../common/cards/ItemCards';
import { Link } from 'react-router-dom';
import ProgressBar from '../../../common/progressBar/progressBar';

function Finalize(props) {
  const [progress, setProgress] = useState(80);
  const [status, setStatus] = useState('active');

  const popoverContent = (
    <div className="popContent">
      <h2>What would you like to do with this item?</h2>
      <Link to="/inventory">
        <Button
          onMouseEnter={() => {
            setStatus('');
            setProgress(100);
          }}
        >
          Create and Stock Item
        </Button>
      </Link>
      <Link to="/inventory">
        <Button
          onMouseEnter={() => {
            setStatus('active');
            setProgress(90);
          }}
        >
          Save Item as Draft
        </Button>
      </Link>
      <Link to="/inventory">
        <Button
          onMouseEnter={() => {
            setStatus('exception');
            setProgress(0);
          }}
        >
          Cancel
        </Button>
      </Link>
    </div>
  );

  return (
    <div className="outerContainer">
      <ProgressBar percent={progress} status={status} />
      <div className="contents">
        <h1>Price</h1>
        <ItemCard />
        <Form>
          <Form.Item>
            <InputNumber />
          </Form.Item>
          <Form.Item>
            <Popover content={popoverContent}>
              <Button>Confirm and Continue</Button>
            </Popover>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Finalize;

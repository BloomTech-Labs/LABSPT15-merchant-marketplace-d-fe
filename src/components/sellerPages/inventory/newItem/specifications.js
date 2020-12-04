import React from 'react';
import '../inventoryStyles.css';
import FormButton from '../../../common/FormButton/FormButton';
import { Form, Input, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

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
          <Form.List name="specs">
            {(fields, { add, remove }) => (
              <>
                {fields.map(field => (
                  <>
                    <Form.Item
                      {...field}
                      name={[field.name, 'first']}
                      fieldKey={[field.fieldKey, 'first']}
                      rules={[{ required: true, message: 'Missing spec' }]}
                    >
                      <Input placeholder="Add another detail" />
                      <MinusCircleOutlined onClick={() => remove(field.name)} />
                    </Form.Item>
                  </>
                ))}
                <Form.Item>
                  <Button onClick={() => add()} block icon={<PlusOutlined />}>
                    Add a detail
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
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

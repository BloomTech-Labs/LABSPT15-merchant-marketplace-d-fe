import React from "react";
import { Form, Input, Cascader } from "antd";
import FormButton from "../../../common/FormButton/FormButton";
import "../inventoryStyles.css";

function NewItem({ setProgress, slider, setData }) {
  const [form] = Form.useForm();

  const onFinish = async values => {
    setData(values);
  };

  // positive interger validation
  let checkQuantity = (rule, value, callback) => {
    const number = Number(value);

    if (!Number.isInteger(number) || number < 0) {
      callback("The quantity can't be less than 0");
    } else {
      callback();
    }
  };
  let checkPrice = (rule, value, callback) => {
    const number = Number(value);

    if (!Number.isInteger(number) || number < 1) {
      callback("The price can't be less than 1");
    } else {
      callback();
    }
  };

  return (
    <div className="contents">
      <h1>Main Information</h1>
      <Form form={form} onFinish={onFinish}>
        <Form.Item
          name="item_name"
          rules={[
            {
              required: true,
              message: "Please enter a product name"
            }
          ]}
        >
          <Input placeholder="Name of Item" />
        </Form.Item>
        <Form.Item
          name="description"
          rules={[
            {
              required: true,
              message: "Please enter a product description"
            },
            {
              message: "No more than 140 characters",
              max: 140
            }
          ]}
        >
          <Input.TextArea placeholder="Short Description (Max 140 Characters)" />
        </Form.Item>
        {/* <Form.Item name="category">
          we need to change or delete it later
          <Cascader placeholder="Choose a category" />
        </Form.Item> */}
        <Form.Item
          name="price_in_cents"
          rules={[
            {
              required: true,
              message: "Please enter a product price in cents"
            },
            {
              validator: checkPrice
            },
            {
              min: 1,
              message: "Price can't be less than 1 cent"
            }
          ]}
        >
          <Input placeholder="Price per item in cents" />
        </Form.Item>
        <Form.Item
          name="quantity_available"
          rules={[
            {
              required: true,
              message: "Please enter a product quantity"
            },
            {
              validator: checkQuantity
            },
            {
              min: 0,
              message: "Quantity can't be less than 0"
            }
          ]}
        >
          <Input placeholder="Quantity Available" />
        </Form.Item>
        <FormButton
          setProgress={setProgress}
          slider={slider}
          progressPercent={25}
          text="Next"
          review={false}
          formSubmit={form.validateFields}
        />
      </Form>
    </div>
  );
}

export default NewItem;

import React from "react";
import "../inventoryStyles.css";
import FormButton from "../../../common/FormButton/FormButton";
import { Form, Input, Button } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

function MoreInfo({ setData, setProgress, slider }) {
  const onFinish = values => {
    setData(values);
  };
  // Next UPDATE: This component will be used to create and add tags to the item, instead of used for specifications

  return (
    <div className="contents">
      <h1>Specifications</h1>
      <p>
        Buyers are more likely to buy an item that is described well. Add
        specific details about your product here. These details should be short
        and clear. Examples include weight, material, size, color, main purpose,
        etc.
      </p>
      <Form className="dynamic_form_nest_item" onFinish={onFinish}>
        <section className="spec-inputs">
          <Form.Item name="specification">
            <Input placeholder="Add a detail" />
          </Form.Item>
          <Form.List name="additional">
            {(fields, { add, remove }) => (
              <>
                {fields.map(field => (
                  <>
                    <Form.Item
                      key={field.key}
                      {...field}
                      name={[field.name, "specs"]}
                      fieldKey={[field.fieldKey, "specs"]}
                      rules={[{ required: true, message: "Missing Detail" }]}
                    >
                      <Input placeholder="Add aditional detail" />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(field.name)} />
                  </>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </section>
        <FormButton
          setProgress={setProgress}
          slider={slider}
          progressPercent={50}
          text="Next"
        />
      </Form>
    </div>
  );
}

export default MoreInfo;

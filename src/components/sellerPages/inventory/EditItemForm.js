import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Modal, Input, Form, Button, AutoComplete } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { useOktaAuth } from '@okta/okta-react';
import { fetchTags, updateProduct } from '../../../state/actions/index';

const EditItemForm = ({ visible, fields, onSubmit, onCancel, fetchTags }) => {
  const { authState } = useOktaAuth();

  const [tags, setTags] = useState([]);
  const [tagsList, setTagsList] = useState([]);
  const [newTagName, setNewTagName] = useState('');
  const [form] = Form.useForm();

  useEffect(() => {
    fetchTags(authState).then(res => {
      let newTags = [];
      res.forEach(tag => {
        newTags.push({ value: tag.tag_name, id: tag.id });
      });
      setTagsList(newTags);
    });
  }, []);

  useEffect(() => {
    const tagsArr = fields.filter(field => field.name[0] === 'tags');

    if (tagsArr.length > 0) {
      setTags(tagsArr[0].value);
    }
  }, [fields]);

  const onTagClick = value => {
    const newTags = tags.filter(tag => tag.value !== value);

    setTags(newTags);
  };

  const addNewTag = option => {
    if (tags.filter(tag => tag.value === option.value).length === 0) {
      setTags([...tags, option]);
    }
    setNewTagName('');
  };

  return (
    <Modal
      visible={visible}
      title="Edit Item"
      okText="submit"
      cancelText="cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            values.id = fields[0].value;
            values.tags = tags;
            onSubmit(values);
          })
          .catch(info => {
            console.log('Validation failed:', info);
          });
      }}
    >
      <Form
        form={form}
        fields={fields}
        layout="horizontal"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item name="item_name" label="Name">
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input />
        </Form.Item>
        <Form.Item name="photo_url" label="Photo URL">
          <Input />
        </Form.Item>
        <Form.Item name="tags" label="Tags">
          {tags.length > 0 ? (
            tags.map(tag => {
              return (
                <Button
                  shape="round"
                  icon={<CloseOutlined />}
                  size="small"
                  onClick={() => onTagClick(tag.value)}
                >
                  {tag.value}
                </Button>
              );
            })
          ) : (
            <></>
          )}
          <AutoComplete
            allowClear
            options={tagsList}
            value={newTagName}
            placeholder="Enter a new tag name"
            filterOption={(inputValue, option) => {
              if (option.value != undefined) {
                return (
                  option.value
                    .toUpperCase()
                    .indexOf(inputValue.toUpperCase()) === -1
                );
              }
            }}
            onSelect={(value, option) => {
              addNewTag(option);
            }}
            onChange={value => setNewTagName(value)}
          />
        </Form.Item>
        <Form.Item name="quantity_available" label="Quantity">
          <Input />
        </Form.Item>
        <Form.Item name="price_in_cents" label="Price in cents">
          <Input />
        </Form.Item>
        <Form.Item name="published" label="Published">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default connect(null, { fetchTags })(EditItemForm);

import React, { useEffect, useState } from "react";
import "../inventoryStyles.css";
import FormButton from "../../../common/FormButton/FormButton";
import { Form, Input, Button, AutoComplete, Tag } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { fetchTags, addTag } from "../../../../state/actions/index";
import { connect } from "react-redux";
import { useOktaAuth } from "@okta/okta-react";

function TagsForm({
  setTags,
  setProgress,
  slider,
  fetchTags,
  addTag,
  setTagsText
}) {
  const { authState } = useOktaAuth();

  const onFinish = () => {
    setTags(addedTagsId);
    setTagsText(addedTagsValue);
  };
  const [tagValue, setTagValue] = useState("");
  const [addedTagsId, setAddedTagsId] = useState([]);
  const [addedTagsValue, setAddedTagsValue] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetchTags(authState).then(res => {
      let newOptions = [];
      res.forEach(tag => {
        newOptions.push({ value: tag.tag_name, id: tag.id });
      });
      setOptions(newOptions);
    });
  }, []);

  let verifyTag = () => {
    if (tagValue !== "") {
      let needToAdd = true;
      let needToInsertInDB = true;
      let tagId = null;
      if (addedTagsValue.includes(tagValue)) {
        needToAdd = false;
      }

      if (needToAdd) {
        options.forEach(option => {
          if (option.value === tagValue) {
            needToInsertInDB = false;
            tagId = option.id;
          }
        });
        if (needToInsertInDB) {
          addTag(authState, tagValue.toLowerCase()).then(res => {
            fetchTags(authState);
            tagId = res.id;
            setTagValue(res.tag_name);
          });
        }
        setAddedTagsId([...addedTagsId, tagId]);
        setAddedTagsValue([...addedTagsValue, tagValue]);
        setTagValue("");
      }
    }
  };

  return (
    <div className="contents">
      <h1>Tags</h1>
      <p>Add tags to your new item below</p>
      <Form className="dynamic_form_nest_item" onFinish={onFinish}>
        <section className="tag-inputs">
          <Form.Item name="tag">
            <AutoComplete
              allowClear
              style={{ width: 200 }}
              options={options}
              value={tagValue}
              placeholder="Enter a tag name"
              filterOption={(inputValue, option) => {
                if (option.value != undefined) {
                  return (
                    option.value
                      .toUpperCase()
                      .indexOf(inputValue.toUpperCase()) !== -1
                  );
                }
              }}
              onChange={value => setTagValue(value)}
            />
          </Form.Item>
          <section className="tags-container">
            {addedTagsValue.map(value => (
              <Tag className="tags">{value}</Tag>
            ))}
          </section>
          <Form.Item>
            <Button
              type="dashed"
              block
              icon={<PlusOutlined />}
              onClick={verifyTag}
            >
              Add Tag to Product
            </Button>
          </Form.Item>
        </section>
        <FormButton
          setProgress={setProgress}
          slider={slider}
          progressPercent={50}
          text="Next"
          formSubmit={onFinish}
        />
      </Form>
    </div>
  );
}

const mapStateToProps = state => ({
  tags: state.tags.tags,
  getTagsStatus: state.tags.getTagsStatus
});

export default connect(mapStateToProps, { fetchTags, addTag })(TagsForm);

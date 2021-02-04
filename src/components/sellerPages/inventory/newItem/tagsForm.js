import React, { useEffect, useState } from 'react'
import '../inventoryStyles.css'
import FormButton from '../../../common/FormButton/FormButton'
import { Form, Input, Button, AutoComplete } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { fetchTags } from '../../../../state/actions/index'
import { connect } from 'react-redux'
import { useOktaAuth } from '@okta/okta-react'

function TagsForm({ setData, setProgress, slider, fetchTags, tags }) {
  const { authState } = useOktaAuth()

  const onFinish = (values) => {
    setData(values)
  }

  useEffect(() => {
    fetchTags(authState)
  }, [])

  let options = []
  tags.forEach((tag) => options.push({ value: tag.tag_name, id: tag.id }))

  return (
    <div className='contents'>
      <h1>Tags</h1>
      <p>Add tags to your new item below</p>
      <Form className='dynamic_form_nest_item' onFinish={onFinish}>
        <section className='tag-inputs'>
          <Form.Item name='tag'>
            <AutoComplete
              style={{ width: 200 }}
              options={options}
              placeholder='Enter a tag name'
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              }
            />
          </Form.Item>
          <Form.List name='additional'>
            {(fields, { add, remove }) => (
              <>
                {fields.map((field) => (
                  <>
                    <Form.Item
                      key={field.key}
                      {...field}
                      name={[field.name, 'tags']}
                      fieldKey={[field.fieldKey, 'tags']}
                      rules={[{ required: true, message: 'Missing Detail' }]}
                    >
                      <Input placeholder='Add aditional detail' />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(field.name)} />
                  </>
                ))}
                <Form.Item>
                  <Button
                    type='dashed'
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
          text='Next'
        />
      </Form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  tags: state.tags.tags,
  getTagsStatus: state.tags.getTagsStatus,
})

export default connect(mapStateToProps, { fetchTags })(TagsForm)

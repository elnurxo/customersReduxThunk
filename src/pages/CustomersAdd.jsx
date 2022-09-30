import React from 'react'
import { Form, Input, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { postData } from '../redux/actions/actions'
import { toast, Toaster } from 'react-hot-toast'

function CustomersAdd() {
    const [form] = Form.useForm()
    const dispatch = useDispatch()
  
    const onFinish = (values) => {
      form.resetFields()
      dispatch(postData(values))
      toast.success('Customer added successfully!')
    }

  return (
    <>
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center',fontWeight:'bold' }}>Add new Customer</h1>
      <Form className='form' sx={{border:'1px solid red'}} form={form} name="form" onFinish={onFinish}>
        <Form.Item name="companyName" label="Company Name">
          <Input />
        </Form.Item>

        <Form.Item name="contactName" label="Contact Name">
          <Input />
        </Form.Item>

        <Form.Item name="contactTitle" label="Contact Title">
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className='add'>
            Add
          </Button>
        </Form.Item>
      </Form>
      <Toaster />
    </div>
    </>
  )
}

export default CustomersAdd
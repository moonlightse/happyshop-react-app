import React, { useState } from 'react'
import request from '../connect/AxiosCofig';
import { Form, Input, Button, Checkbox, Layout } from 'antd';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
const Login = () => {
  const onFinish = async (values) => {
    console.log('Success:', values.username);
    const data = await request.get('');
    console.log(data)
  };
  const [password, setPassword] = useState('pw')
  const [username, setUsername] = useState('un')
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (

    <Form
      style={{ margin: 130 }}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 8,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}

      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 10,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 10,
          span: 10,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>

      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 10,
          span:8,
        }}
      >
        <p style={{fontWeight:'bold'}}>OR</p>
       </Form.Item> 
      <Form.Item
        wrapperCol={{
          offset: 9,
          span: 12,
        }}
      >
     

        <Button type="danger" htmlType="button" style={{width:70, height:40, marginRight:30}}>
          <GoogleOutlined style={{ fontSize: '30px' }} />
        </Button>
        
        <Button type="primary" htmlType="button" style={{ background: '#4660d4' ,width:70, height:40}}>
          <FacebookOutlined style={{ fontSize: '30px' }} />
        </Button>

      </Form.Item>
    </Form>



  );
};


export default Login
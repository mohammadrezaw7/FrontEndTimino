import './Login.css'
import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios'
import qs from "qs";
import React from 'react'
import { notification } from 'antd';
import 'antd/dist/antd.css';

const handleSubmit = (event) =>{
    console.log(event)
    return
    let res = qs.stringify({
        'UserName' : event.target.elements.Username.value,
        'Password' : event.target.elements.Password.value,
    })
    let config = {
        method: 'post',
        url: 'https://timino-application.iran.liara.run/api/auth/login?=',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : res,

    }
    axios(config)
        .then(function (response) {
            notification.open({
                message: 'Login was successful.',
                description: 'User has been successfuly Logged-In.',
                type:'success',

            });
            alert("User has been successfuly signed-up.");
            window.location.replace("/dashboard")
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            notification.open({
                message: 'Login was NOT successful',
                description: 'The PassWord or username is already in use.',
                type:'error',
            });
            console.log(error.response.data);
        });
}


const Login = () => {
    const onFinish = (values: any) => {
        let res = qs.stringify({
            'username' : values.username,
            'password' : values.password,
        })
        let config = {
            method: 'post',
            url: 'https://timino-application.iran.liara.run/api/auth/login?=',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : res,
        }
        axios(config)
            .then(function (response) {
                notification.open({
                    message: 'Login was successful.',
                    description: 'User has been successfuly Logged-In.',
                    type:'success',

                });
                window.location.replace("/dashboard")
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                notification.open({
                    message: 'Login was NOT successful',
                    description: 'The PassWord or username is not correct.',
                    type:'error',
                });
                console.log(error.response.data);
            });

    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


        return (
            <>
            <div className='card-test'>
            <div className='card-Login'>
            <Form
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <h5>Login</h5>
                <Form.Item
                    label="Username"
                    name="username"
                    // rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    // rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            </div>
            </div>
            </>
        );
    };

export default Login;
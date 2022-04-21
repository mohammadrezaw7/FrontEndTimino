import React, {useState} from 'react';
import {request} from "./Network.js";
import 'antd/dist/antd.css';
import './CreateTimeLine.css';

import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch, TimePicker, Upload,
} from 'antd';

const {TextArea} = Input;


function UploadOutlined() {
    return null;
}

let startsDate = null;

function onChange(date, dateString) {
    startsDate = dateString;
}

const onFinish = (values) => {
    console.log({
        title: values.title,
        privilege_level: values.privilege_level,
        description: values.description,
        startsAt: startsDate,
    })
    request(
        'POST',
        '/api/timeline/create',
        {
            body: {
                title: values.title,
                privilege_level: values.privilege_level,
                description: values.description,
                startsAt: startsDate,
            }
        })
        .then(data => {
            alert("*** Timeline created successfully ***")
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
};

const MakeTimeline = () => {
    const [componentSize, setComponentSize] = useState('large');

    return (
        <Form
            className="create_timeline_form"
            initialValues={{
                remember: true
            }}
            onFinish={onFinish}
            labelCol={{
                span: 2,
            }}
            wrapperCol={{
                span: 12,
            }}
            layout="horizontal"
            size={componentSize}
        >
            <Form.Item
                label="Title"
                name="title"
                style={{color: "red"}}
                className="create_timeline_item"
            >
                <Input
                />
            </Form.Item>
            <Form.Item
                label="Privilege Level"
                name="privilege_level"
            >
                <Select defaultValue="public">
                    <Select.Option value="public">Public</Select.Option>
                    <Select.Option value="private">Private</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="Description"
                name="description"
            >
                <TextArea rows={4}/>
            </Form.Item>
            <Form.Item
                label="Starts At Date"
                name="starts_date"
            >
                <DatePicker
                    labelCol={{
                        span: 2,
                    }}
                    wrapperCol={{
                        span: 12,
                    }}
                    onChange={onChange}
                />
            </Form.Item>
            <Form.Item
                label="Upload Avatar">
                <Upload
                    labelCol={{
                        span: 2,
                    }}
                    wrapperCol={{
                        span: 12,
                    }}
                >
                    <Button icon={<UploadOutlined/>}>Click to Upload</Button>
                </Upload>
            </Form.Item>
            <Form.Item label="Create TimeLine">
                <Button
                    htmlType="submit"
                >
                    Create
                </Button>
            </Form.Item>
        </Form>
    );
}

export default MakeTimeline;

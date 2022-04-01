import React from 'react'
import { Input, Select } from 'antd';
import axios from 'axios'

import './Search.css'
import 'antd/dist/antd.min.css';

const onSearch = async (value) => {
    console.log(value);
    axios.post('https://timino-app.iran.liara.run//api/user/search-timeline', 
    {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods' : 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        name : value
    }).then ( function (response) {
        console.log(JSON.stringify(response.data));
    }).catch ( function (error) {
        console.log("error: " + error)
    })
};

const { Option } = Select;
const selectBefore = (
    <Select defaultValue="user" style={{ width: '100px' }}>
      <Option value="user" >User</Option>
      <Option value="timeline" >Timeline</Option>
    </Select>
  );

export default function Search() {
    const { Search } = Input;
    return (
        <div className="search-body">
            <div className="box">
                <Search
                    size="large"
                    placeholder="input search ..."
                    onSearch={onSearch}
                    enterButton
                    allowClear
                    addonBefore={selectBefore}
                />
             </div>
        </div>
    )
}

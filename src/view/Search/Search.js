import React, { useState } from 'react'
import { Input, Select, AutoComplete } from 'antd';
import axios from 'axios'

import './Search.css'
import 'antd/dist/antd.min.css';

const { Search } = Input;
const { Option } = Select;

const Complete = () => {
    const [options, setOptions] = useState< {value}>([]);
    const handleSearch = (value) => {
      setOptions(
        !value ? [] : [{ value }, { value: value + value }, { value: value + value + value }],
      );
    };
  
    const onSelect = (value) => {
      console.log('onSelect', value);
    };

const onSearch = async (value) => {
    console.log(value);
    axios.post('https://timino-app.iran.liara.run//api/user/search-timeline', {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                    },
                data: value
            }).then ( function (response) {
                console.log(response)
            }).catch ( function (error) {
                console.log("error: " + error)
            })
};

const selectBefore = (
    <Select defaultValue="user" style={{ width: '100px' }}>
      <Option value="user">User</Option>
      <Option value="timeline">Timeline</Option>
    </Select>
  );

    return (
        <div className="search-body">
            <div className="box">
            <AutoComplete
                options={options}
                style={{ width: 200 }}
                onSelect={onSelect}
                onSearch={handleSearch}
                >
                <Search
                    size="large"
                    placeholder="input search ..."
                    onSearch={onSearch}
                    enterButton
                    allowClear
                    addonBefore={selectBefore}
                />
            </AutoComplete>
             </div>
        </div>
    )
}
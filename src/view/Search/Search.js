import React from 'react'
import { Input, Select } from 'antd';

import './Search.css'
import 'antd/dist/antd.css';

const { Search } = Input;
const { Option } = Select;

const onSearch = value => {
    console.log(value);
};

const selectBefore = (
    <Select defaultValue="user" style={{ width: '100px' }}>
      <Option value="user">User</Option>
      <Option value="timeline">Timeline</Option>
    </Select>
  );

export default function HomePage() {
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

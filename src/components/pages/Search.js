import React from 'react'
import { Tabs } from 'antd';
import { Input } from 'antd';

import 'antd/dist/antd.css';
import '../../App.css'

const { Search } = Input;
const { TabPane } = Tabs;
const onSearch = value => console.log(value);

export default function HomePage() {
    return (
        <div>
            <div className="card-container">
                <Tabs size='small' type="card" centered={true}>
                  <TabPane tab="Search User" key="1">
                    <Search allowClear placeholder="Search user ..." onSearch={onSearch} enterButton size='larg' />
                  </TabPane>
                  <TabPane tab="Search Time Line" key="2">
                    <Search allowClear placeholder="Search time line ..." onSearch={onSearch} enterButton size='larg' />
                  </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

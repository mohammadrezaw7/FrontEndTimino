import React, {useEffect, useState} from 'react'
import {Avatar, Card, Input, Select} from 'antd';

import './Search.css'
import 'antd/dist/antd.min.css';
import Meta from "antd/es/card/Meta";
import axios from "axios";
import Search from "antd/es/input/Search";

const {Option} = Input;

const selectBefore = (
    <Select defaultValue="user" style={{width: '100px'}}>
        <Option value="user">User</Option>
        <Option value="timeline">Timeline</Option>
    </Select>
);


const state = {
    loading: false,
};

const Search2 = () => {
    const [fetchData,setFetchData] = useState([]);
    let onSearch = value => {
        axios.get('https://timino-application.iran.liara.run//api/user/search',{
            params:{
                username:value
            }
        }).then(res=>{
            setFetchData(res.data.data.users)
            // data=res.data.data.users;
            console.log(fetchData)
        })
        state.loading=false;
    };
    let forceUpdateHandler=()=>{
        this.forceUpdate();
    };
    const { loading } = state;
    return (
        <>
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

            <div className='row'>
                {
                    fetchData.map(c=>{
                        return (
                        <div className='col'>
                            <Card style={{ width: 400,height:150, marginTop: 16 }}>
                                <Meta
                                    avatar={<Avatar src={c.avatar} />}
                                    title={c.first_name +"  " + c.last_name}
                                    description={c.username}
                                />
                            </Card>
                        </div>
                        )
                    })
                }
            </div>

        </>
    )
}
export default Search2;
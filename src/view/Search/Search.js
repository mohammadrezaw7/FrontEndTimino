import React, { useState } from "react";
import axios from 'axios'
import { Input, AutoComplete, Select } from 'antd';

import './Search.css'
import 'antd/dist/antd.min.css';

const searchResult = ( t ) => {
  if (t === "") {
      this.setState( {options: []})
      return 0;
  }
  const ref = this;
  axios.post ('https://timino-app.iran.liara.run//api/user/search-timeline',
    {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin' : '*',

      name : {t}
    })
    .then ( function (response) {
      console.log(response.data);
      var ops = response.data.map(o => {return {value: o.name, 
        label:
        (
          <div
            id="ds"
            style={{
              display: 'flex',
              color:"rgb(255, 90, 169)"
            }}
            >
              <a href={"#"}> {o.name} </a>
            </div>
          )
        }})
        ref.setState({options: ops})
      })
      .catch ( function (error) {
        console.log("error: " + error)
      })
}

const Complete = () => {
  
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([])

  const handleSearch = (value) => {

    console.log(value);

    setOptions(value ? searchResult(value) : [])
  /*
  axios.get('https://timino-app.iran.liara.run//api/user/search-timeline', 
  {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin' : '*',

      name : {value}

  }).then ( function (response) {
      console.log(JSON.stringify (response.data));
      
  }).catch ( function (error) {
      console.log("error: " + error)
  })
  */
  };

  const onSelect = (value) => {
    console.log('onSelect', value);
  };

  const onChange = (value) => {
    setValue(value);
  };

  const { Option } = Select;

  const selectBefore = (
    <Select defaultValue="user" style={{ width: '100px' }}>
      <Option value="user" >User</Option>
      <Option value="timeline" >Timeline</Option>
      </Select>
    );
    return (
      <div className="search-body">
        <AutoComplete
          value={value}
          dropdownMatchSelectWidth={252}
          style={{
            width: 300,
          }}
          options={options}
          onSelect={onSelect}
          onSearch={handleSearch}
          onChange={onChange}
          >
            <div className="box">
              <Input.Search 
                size="large" 
                placeholder="input search ..."
                enterButton
                allowClear
                addonBefore={selectBefore} 
                />
              </div>
          </AutoComplete>
        </div>
      )
  }

  export default Complete;
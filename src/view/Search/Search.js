import React, { useState } from "react";
import axios from 'axios'
import { Input, AutoComplete, Select } from 'antd';

import '../../Timino.postman.json'

import './Search.css'
import 'antd/dist/antd.min.css';

const searchResult = ( t ) => {
  if (t === "") {
    console.log('empty input .')
    return 0;
  }
  axios.get ('https://timino-app.iran.liara.run//api/timeline/search?title='+t)
    .then ( function (response) {
      console.log('resultSearch:' + response.data);
      response.data.map (o => {return {value: o.title, 
        label:
        (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
            >
              <span>
                @ {' '}
                <a
                  href={'#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    {o.title}
                  </a>
                </span>
            </div>
          )
        }})
      })
      .catch ( function (error) {
        console.log(error)
      })
}

const Complete = () => {
  
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([])

  const handleSearch = (data) => {

    console.log('complete... '+data);

    setOptions(data ? searchResult(data) : [] )

  /* get data
    axios.get('https://timino-app.iran.liara.run//api/user/search-timeline', 
    {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin' : '*',

    }).then ( function (response) {
        console.log(JSON.stringify (response.data));
      
    }).catch ( function (error) {
        console.log("error: " + error)
    })
  */
  };

  const onSelect = (data) => {
    console.log('onSelect', data);
  };

  const onChange = (data) => {
    setValue(data);
  };

  const selectBefore = (
    <Select defaultValue="timeline" style={{ width: '100px' }}>
      <Select.Option value="user" >User</Select.Option>
      <Select.Option value="timeline" >Timeline</Select.Option>
      </Select>
    );
    return (
      <div className="search-body">
        <AutoComplete
          value={value}
        //notFoundContent='Not Found'
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
                onSearch={searchResult}
                allowClear
                addonBefore={selectBefore} 
                />
              </div>
          </AutoComplete>
        </div>
      )
  }

  export default Complete;
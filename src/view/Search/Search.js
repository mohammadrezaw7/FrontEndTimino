import React, { useState } from "react";
import axios from 'axios'
import { Input, AutoComplete, Select } from 'antd';

import '../../Timino.postman.json'

import './Search.css'
import 'antd/dist/antd.min.css';

class Complete extends React.Component {
  
  constructor (props){
    super(props);
    this.ac = React.createRef();
  }
  state = {
    options : [],
    value : ''
  }

//const [value, setValue] = useState('');

  searchResult = ( t ) => {
    if (t === "") {
      this.setState({options: []})
      return 0;
    }

    const ref = this
    axios.get ('https://timino-app.iran.liara.run//api/timeline/search?title='+t)
      .then ( function (response) {
        console.log("res:", response.data);
        var ops = response.data.data.map(o => {return {
          value: o.title, 
          label: (
            <div
              style={{
                display: 'flex',
              }}
            >
              <a >{o.title}</a>
            </div>
          )
        }})
        ref.setState({options:ops})
        console.log({ops})
        })
        .catch ( function (error) {
          ref.setState({options: []})
          console.log(error)
        })
  }

  onSelect = (data) => {
    console.log('onSelect', data);
  };

  onChange = (data) => {
    this.setState({value: data});
  };

    render(){
      return (

      <div className="search-body">
        <div>
          <Select defaultValue="timeline" style={{ width: '100px' }}>
            <Select.Option value="user" >User</Select.Option>
            <Select.Option value="timeline" >Timeline</Select.Option>
            </Select>
            </div>
        <div >
          <AutoComplete
            dropdownClassName="autocompletedrpdwn"
            notFoundContent="not Found!"
            value={this.state.value}
          //notFoundContent='Not Found'
            options={this.state.options}
            onSelect={(e) => {this.onSelect(e)}}
          //onSearch={handleSearch}
            onChange={(e) => {this.searchResult(e); this.onChange(e);}}
            >
            <Input.Search 
              size="large" 
              placeholder="input search ..."
              enterButton
              onSearch={(e) => {this.searchResult(e)}}
              allowClear
              />
            </AutoComplete>
          </div>
        </div>
      )
    }
  }

  export default Complete;

import React /*{ useState }*/ from "react";
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
    value : '',
    server: 'timeline'
  }

//const [value, setValue] = useState('');

  TimelineSearchResult = ( timeline ) => {
    if (timeline === "") {
      this.setState({options: []})
      return 0;
    }

    const ref = this
    axios.get ('https://timino-application.iran.liara.run//api/timeline/search?title='+timeline)
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
              <a href="#">{o.title}</a>
            </div>
          )
        }})
        ref.setState({options:ops})
      //console.log({ops})
        })
        .catch ( function (error) {
          ref.setState({options: []})
          console.log(error)
        })
  }

  UserSearchResult = ( users ) => {
    if (users === "") {
      this.setState({options: []})
      return 0;
    }

    const ref = this
    axios.get ('https://timino-application.iran.liara.run//api/user/search_suggestion?username='+users)
      .then ( function (response) {
        console.log("res:", response.data);
        var ops = response.data.data.map(o => {return {
          value: o.username, 
          label: (
            <div
              style={{
                display: 'flex',
              }}
            >
              <a href="#">{o.username}</a>
            </div>
          )
        }})
        ref.setState({options:ops})
      //console.log({ops})
        })
        .catch ( function (error) {
          ref.setState({options: []})
          console.log(error)
        })
  }

  onSearch = (e) => {
    if(this.state.server === 'timeline'){
      this.TimelineSearchResult(e)
    //console.log("yess")
    }
    else{
      this.UserSearchResult(e)
    }
    
  }

  onSelect = (data) => {
    console.log('onSelect', data);
  };

  /*
  onChangeValue = (data) => {
    this.setState({value: data});
    console.log('data : ' + data)
    console.log("value : " + this.state.value)
  };
  */

  onChangeSelect = (value) => {
    console.log(value);
    this.setState({server: value.value})
  //console.log(this.state.server)
  };

  render(){
      return (

      <div className="search-body">
        <div>
          <Select 
            labelInValue
            placement='topRight' 
            onChange={(value) => this.onChangeSelect(value)} 
            defaultValue="timeline" 
            style={{ width: '100px' }}
            >
              <Select.Option value="timeline" >Timeline</Select.Option>
              <Select.Option value="user" >User</Select.Option>
              </Select>
            </div>
        <div >
          <AutoComplete
            dropdownClassName="autocompletedrpdwn"
            notFoundContent="not Found!"
          //value={this.state.value}
            options={this.state.options}
            onSelect={(e) => {this.onSelect(e)}}
          //onSearch={handleSearch}
            onChange={(e) => {/*this.onChangeValue(e);*/ this.onSearch(e);}}
            >
            <Input.Search 
              size="large" 
              placeholder="input search ..."
              enterButton
              onSearch={(e) => this.onSearch(e)}
              allowClear
              />
            </AutoComplete>
          </div>
        </div>
      )
    }
  }

  export default Complete;

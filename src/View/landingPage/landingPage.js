import React /*{ useState }*/ from "react";
//import axios from 'axios'
//import { Input, AutoComplete, Select } from 'antd';

import Navbar from "./navbar";

import './landingPage.css'
import 'antd/dist/antd.min.css';

class LandingPage extends React.Component {
  
  constructor (props){
    super(props);
    this.ac = React.createRef();
  }
  state = {
    
  }

  render(){
      return (
        <Navbar/>
      )
    }
  }

  export default LandingPage;

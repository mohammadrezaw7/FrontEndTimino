import React /*{ useState }*/ from "react";
//import axios from 'axios;'
import { Button } from 'antd';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, /*UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem*/ } from 'reactstrap';

import './landingPage.css'
import 'antd/dist/antd.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navigationbar extends React.Component {
  
  constructor (props){
    super(props);
    this.ac = React.createRef();
    this.state = {
      
    }
  }

  render(){
    return (
      <div /*className="nav"*/>
        <Navbar color="light" expand="md" light >
          <NavbarBrand className="color-brand" href="/">Timino</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck(){}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar >
              <NavItem>
                <NavLink href="/forus">Contact Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/mohammadrezaw7/FrontEndTimino">GitHub</NavLink>
              </NavItem>
            </Nav>
            <Button type="primary" size={"larg"} href="/login" >Login</Button>
            <Button size={"larg"} href="/register" >register</Button>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

  export default Navigationbar;
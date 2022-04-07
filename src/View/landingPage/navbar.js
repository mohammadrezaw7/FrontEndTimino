import React /*{ useState }*/ from "react";
//import axios from 'axios'
//import { Input, AutoComplete, Select } from 'antd';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

import './landingPage.css'
//import 'antd/dist/antd.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navigationbar extends React.Component {
  
  constructor (props){
    super(props);
    this.ac = React.createRef();
  }
  state = {
    
  }

  render(){
      
      return (
            <div>
              <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Timino</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="/components/">aboatUs</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">GitHub</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Options
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          Option 1
                        </DropdownItem>
                        <DropdownItem>
                          Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
      )
    }
  }

  export default Navigationbar;

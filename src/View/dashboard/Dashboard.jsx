import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  ContactsOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import "./Dashboard.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BsXLg, BsJustify } from "react-icons/bs";
import SignUp from "../Signup/SignUp";

export default function Dashboard(props) {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  const navigate = useNavigate();
  let state = {
    collapsed: false,
  };

  const [selectedMenuItem, setSelectedMenuItem] = useState("item1");

  // const componentsSwitch = (key) => {
  //   switch (key) {
  //     // case "Profile":
  //     //   return window.location.replace("/dashboard");
  //     case "ViewTimeLine":
  //       return window.location.replace("/time-view");
  //     case "MakeTimeLine":
  //       return window.location.replace("/CreateTimeLine");
  //     case "Search":
  //       return window.location.replace("/Card");
  //     case "log-out":
  //       return window.location.replace("/");
  //     default:
  //       return;
  //   }
  // };

  const displaySideBarHandler = () => {
    if (sideBarIsOpen) {
      document.querySelector(".sidebar").style.display = "none";
    } else {
      document.querySelector(".sidebar").style.display = "block";
    }
    setSideBarIsOpen((prev) => !prev);
  };

  const contentClassName = props.className;
  return (
    <>
      <Layout className="h-100">
        <Sider
          style={{ display: "none", position: "absolute", height: "100vh" }}
          className="sidebar"
          trigger={null}
          collapsible
          collapsed={state.collapsed}
        >
          <div className="logo" />
          <Menu
            selectedKeys={selectedMenuItem}
            theme="dark"
            mode="inline"
            // onClick={(e) => setSelectedMenuItem(e.key)}
          >
            <Menu.Item key="Profile" icon={<UserOutlined />}>
              <Link to="/dashboard">Profile</Link>
            </Menu.Item>

            <Menu.Item key="ViewTimeLine" icon={<VideoCameraOutlined />}>
              <Link to="/Timelineindex">Timeline Index</Link>
            </Menu.Item>

            <Menu.Item key="MakeTimeLine" icon={<UploadOutlined />}>
              <Link to="/CreateTimeLine">Make New TimeLine</Link>
            </Menu.Item>
            <Menu.Item key="Search" icon={<ContactsOutlined />}>
              <Link to="/Card">Search</Link>
            </Menu.Item>
            <Menu.Item key="log-out" icon={<LogoutOutlined />}>
              <Link to="/">Log Out</Link>
            </Menu.Item>
            {sideBarIsOpen && (
              <Menu.Item icon={<BsXLg />}>
                <a onClick={displaySideBarHandler}>Close</a>
              </Menu.Item>
            )}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          {/* <Header
            className="site-layout-background"
            style={{ padding: 0 }}
          ></Header> */}
          <Content className={`site-layout-background ${contentClassName}`}>
            {!sideBarIsOpen && (
              <div>
                <a onClick={displaySideBarHandler}>
                  <BsJustify color="#fff" size={35} />
                </a>
              </div>
            )}
            <div>{props.children}</div>
            {/* {componentsSwitch(selectedMenuItem)} */}
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

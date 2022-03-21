import {
    Layout,
    Menu
} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    ContactsOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import {Content, Header} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import './dashboard.css';
import {Link, Route} from "react-router-dom";
import signUp from "../Signup/SignUp";
import {useState} from "react";
import SignUp from "../Signup/SignUp";



const Dashboard = () => {
    let state = {
        collapsed: false,
    };

    const [selectedMenuItem, setSelectedMenuItem] = useState('item1');

    const componentsSwitch = (key) => {
        switch (key) {
            case 'Profile':
                return (<h1>item1</h1>);
            case 'TimeLine':
                return (<h2>item2</h2>);
            case 'Calender':
                return (<h3>item3</h3>);
            case 'Friends' :
                return (<h4>item4</h4>);
            case 'logout' :
                return (<SignUp/>);
        }
    }


    return (
        <>
            <Layout className='h-100'>
                <Sider trigger={null} collapsible collapsed={state.collapsed}>
                    <div className="logo"/>
                    <Menu selectedKeys={selectedMenuItem} theme="dark" mode="inline" onClick={(e) =>
                        setSelectedMenuItem(e.key)}>
                        <Menu.Item key="Profile" icon={<UserOutlined/>}>
                            <span>Profile</span>
                        </Menu.Item>
                        <Menu.Item key="TimeLine" icon={<VideoCameraOutlined/>}>
                            TimeLine
                        </Menu.Item>
                        <Menu.Item key="Calender" icon={<UploadOutlined/>}>
                            Calender
                        </Menu.Item>
                        <Menu.Item key="Friends" icon={<ContactsOutlined/>}>
                            Friends
                        </Menu.Item>
                        <div className='log-out'>
                            <Menu.Item key="log-out" icon={<LogoutOutlined/>}>
                                Log Out
                            </Menu.Item>
                        </div>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0}}>
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        {componentsSwitch(selectedMenuItem)}
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}
export default Dashboard
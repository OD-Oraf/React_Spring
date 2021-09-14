//Imports
import { useState, useEffect } from 'react';
import { getAllStudents } from "./client";
import { Layout, Menu, Breadcrumb } from 'antd';
//Icons
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import './App.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function App() {
    const[students, setStudents] = useState([]);
    const [collapsed, setCollapsed] = useState(false)

    const fetchStudents = () =>
        getAllStudents()
            //response sent back from api call
            .then(res => res.json())
            .then(data => {
                console.log(data);
                //Load student data into state
                setStudents(data);
            })

    //when component loads call fetch students
    useEffect(() => {
        console.log("Component is mounted");
        fetchStudents();
    },[]);

    if (students.length <= 0){
        return "no data";
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed}
                   onCollapse={setCollapsed}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        Option 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        Option 2
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined />}>
                        Files
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        Bill is a cat.
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>OD Design ©2018 Created by OD Oraf</Footer>
            </Layout>
        </Layout>
    );


}

export default App;

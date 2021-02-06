import React, { useState } from "react";

import { Layout, Menu, Breadcrumb } from "antd";
import "./PrivateLayout.scss";
import Title from "antd/lib/typography/Title";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

const PrivateLayout = ({ children }) => {
  const [isCollapsed, setCollapsed] = useState(false);

  function handleOnCollapse() {
    const newState = !isCollapsed;
    console.log(newState);
    setCollapsed(newState);
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={isCollapsed} onCollapse={handleOnCollapse}>
        <div className="logo">
          <i class="fas fa-image    ">LOGO'S ADMIN</i>
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Quản lý bài viết
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu
            key="sub1"
            icon={<UserOutlined />}
            title="Quản lý thành viên"
          >
            <Menu.Item key="3">Admin</Menu.Item>
            <Menu.Item key="4">User</Menu.Item>
            <Menu.Item key="5">Some body ???</Menu.Item>
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
        <Header>{children}</Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Quản lý bài viết</Breadcrumb.Item>
            <Breadcrumb.Item>TITLE BÀI VIẾT</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            NỘI DUNG
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <Title level={5}>Travel and food design by me !!!</Title>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default PrivateLayout;

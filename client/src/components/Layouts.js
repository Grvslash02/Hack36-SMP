import React, { useState, useRef } from "react";
import Cards from "./cards";
import {
  BookOutlined,
  WechatOutlined,
  PlusOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme, Card } from "antd";
const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  //   getItem('Option 1', '1', <PieChartOutlined />),
  //   getItem('Option 2', '2', <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Dashboard", "1"),
    getItem("Update profile", "2"),
    getItem("Reset Password", "3"),
    getItem("Logout", "4"),
  ]),
  getItem("Groups", "sub2", <TeamOutlined />, [
    getItem("Team 1", "5"),
    getItem("Team 2", "6"),
  ]),
  getItem("Meet", "7", <WechatOutlined />),
  getItem("Resources", "8", <BookOutlined />),
  //   getItem('Files', '6', <FileOutlined />),
];
export default function Layouts({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width="300"
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          style={{ fontSize: "20px" }}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
            background: "#1679AB",
          }}
        >
          <h1 style={{ margin: 0, color: "white" }}>SMP</h1>{" "}
          {/* The h1 element */}
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "6px 0",
            }}
          ></Breadcrumb>

          <div>{children}</div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          CreatiO(n) Coders ©{new Date().getFullYear()} Created by the Best
          Developers
        </Footer>
      </Layout>
    </Layout>
  );
}

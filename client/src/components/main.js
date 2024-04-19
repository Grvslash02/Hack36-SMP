import React, { useState, useRef, useEffect } from "react";
import {
  BookOutlined,
  WechatOutlined,
  PieChartOutlined,
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
export default function Main() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const styles = {
    cardContainer: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap",
      padding: "16px",
    },
    cardStyle: {
      width: 240,
      margin: "16px",
    },
  };

  const cardsRef = useRef(null);

  // Scroll to the cards section when the component is mounted

  const cards = [
    {
      title: "Resource Library",
      description:
        "Access a curated collection of resources, including articles, videos, and guides. Learn new skills and gain insights from expert mentors.",
      imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      title: "Mentorship Chats",
      description:
        "Join chat groups to discuss topics, ask questions, and share experiences with mentors and peers.",
      imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      title: "Career Guidance",
      description:
        "Get personalized advice on your career path. Mentors provide insights into various industries and help you plan your future.",
      imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
  ];
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
          <div
            style={{
              padding: 24,
              minHeight: 360,
              backgroundColor: "#E1F7F5",
              borderRadius: borderRadiusLG,
            }}
          >
            <div className="container">
              <div
                ref={cardsRef}
                className="cards-section"
                style={{
                  display: "flex",
                  flexWrap: "wrap", // Allow cards to wrap to the next line
                  justifyContent: "center", // Center the cards
                  padding: "10px", // Add margin to the top and bottom
                }}
              >
                {cards.map((card, index) => (
                  <Card
                    key={index}
                    hoverable
                    style={{
                      width: 240, // Width of each card
                      margin: "90px", // Margin around each card
                    }}
                    cover={<img alt={card.title} src={card.imgSrc} />}
                  >
                    <Card.Meta
                      title={card.title}
                      description={card.description}
                    />
                  </Card>
                ))}
              </div>
            </div>
          </div>
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

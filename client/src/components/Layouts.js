import React, { useState, useRef } from "react";
import {
  BookOutlined,
  WechatOutlined,
  PlusOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Layout,
  Menu,
  Card,
  Modal,
  Input,
  Button,
} from "antd";
import axios from 'axios'; // Import Axios to make HTTP requests

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

const Layouts = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [teams, setTeams] = useState(["Team 1", "Team 2"]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    const handleCreateTeam = async () => {
      setIsModalVisible(false);
      const newTeamName = `Team ${teams.length + 1}`;
      setTeams([...teams, newTeamName]);
      await createTeam();
    };
  
    handleCreateTeam();
  };
  

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Function to handle creating a team
  const createTeam = async () => {
    try {
      const response = await axios.post('/api/v1/teams/create', {
        createdBy: 'MentorID', // Provide the ID of the mentor creating the team
        members: [], // Initial list of members (can be empty)
      });
      console.log(response.data); // Log the response from the backend
      // Update UI based on the response
    } catch (error) {
      console.error('Error creating team:', error);
      // Handle error and update UI accordingly
    }
  };

  // Function to handle searching for users
  const searchUsers = async () => {
    try {
      const response = await axios.get('/api/v1/teams/search', {
        searchTeam: searchTerm,
      });
      setSearchResults(response.data.users);
    } catch (error) {
      console.error('Error searching users:', error);
      // Handle error and update UI accordingly
    }
  };

  // Function to handle adding a user to the team
  const addMemberToTeam = async (teamId, memberId) => {
    try {
      const response = await axios.put('/api/v1/teams/add-member', {
        teamId,
        memberId,
      });
      console.log(response.data); // Log the response from the backend
      // Update UI based on the response
    } catch (error) {
      console.error('Error adding member to team:', error);
      // Handle error and update UI accordingly
    }
  };

  const menuItems = [
    getItem("User", "sub1", <UserOutlined />, [
      getItem("Dashboard", "1"),
      getItem("Update profile", "2"),
      getItem("Reset Password", "3"),
      getItem("Logout", "4"),
    ]),
    getItem("Groups", "sub2", <PlusOutlined onClick={showModal} />, [
      ...teams.map((team, index) =>
        getItem(team, `5${index}`, <TeamOutlined />)
      ),
    ]),
    getItem("Meet", "7", <WechatOutlined />),
    getItem("Resources", "8", <BookOutlined />),
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
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
          items={menuItems}
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
          <h1 style={{ margin: 0, color: "white" }}>SMP</h1>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "6px 0" }}></Breadcrumb>
          <div>{children}</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          CreatiO(n) Coders ©{new Date().getFullYear()} Created by the Best
          Developers
        </Footer>
        <Modal
          title="Create Team"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          cancelButtonProps={{
            style: { background: "red", borderColor: "red" },
          }}
          width={600}
          style={{ fontSize: "20px" }}
        >
          <Input.Search
            placeholder="Search user"
            enterButton
            style={{ padding: "12px",color:"gray", borderColor:"black" }}
            onChange={(e) => setSearchTerm(e.target.value)}
            onSearch={searchUsers} 
          />
          {/* Display search results */}
          {searchResults.map((user) => (
            <div key={user._id}>
              {user.username}{' '}
              <Button onClick={() => addMemberToTeam(teamId, user._id)}>Add</Button>
            </div>
          ))}
        </Modal>
      </Layout>
      <style>
        {`
          Input.Search::placeholder {
            color: gray;
            font-size: 16px; 
          }
          Input.Search:hover {
            border-color: black; 
          }
        `}
      </style>
    </Layout>
  );
};

export default Layouts;

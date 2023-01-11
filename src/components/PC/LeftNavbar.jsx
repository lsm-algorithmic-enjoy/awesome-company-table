import { Menu, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";

const LeftNavBar = ({ selectedMenuKeys, setSelectedMenuKeys }) => {
  return (
    <div style={{ height: "100%", position: "absolute" }}>
      <Menu
        className="left-navigation-bar"
        selectedKeys={selectedMenuKeys}
        onSelect={({ selectedKeys }) => setSelectedMenuKeys(selectedKeys)}
        mode="inline"
        theme="dark"
        style={{
          width: 200,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Menu.ItemGroup key="info" style={{ height: "90%", width: "100%" }}>
          <Menu.Item key="-1">Seung Company</Menu.Item>
          <Menu.Divider />
          <Menu.Item key="0">Team Member</Menu.Item>
          <Menu.Item key="1">Work</Menu.Item>
          <Menu.Item key="2">Management</Menu.Item>
          <Menu.Item key="3">Setting</Menu.Item>
        </Menu.ItemGroup>
        <Button type="primary" icon={<UserOutlined />} style={{ width: "90%" }}>
          관리자 페이지
        </Button>
      </Menu>
    </div>
  );
};

export default LeftNavBar;

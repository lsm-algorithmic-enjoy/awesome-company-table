import { Menu, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";

const MobileNavBar = ({ selectedMenuKeys, setSelectedMenuKeys }) => {
  return (
    <div>
      <Menu
        className="top-navigation-bar"
        selectedKeys={selectedMenuKeys}
        onSelect={({ selectedKeys }) => setSelectedMenuKeys(selectedKeys)}
        mode="vertical"
        theme="dark"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Menu.Item key="-1">Seung Company</Menu.Item>
        <Button type="primary" icon={<UserOutlined />}>
          관리자 페이지
        </Button>
        <Menu.SubMenu>
          <Menu.Item key="0">Team Member</Menu.Item>
          <Menu.Item key="1">Work</Menu.Item>
          <Menu.Item key="2">Management</Menu.Item>
          <Menu.Item key="3">Setting</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>
  );
};

export default MobileNavBar;

// Menu에서 vertical 모드 및 SubMenu를 통한 메뉴 표시 기능 구현, 반응형 웹 version

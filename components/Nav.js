import React, { useState } from "react";
import Link from "next/link";
import {
  Layout,
  Menu,
  Badge,
  Icon,
  Row,
  Col,
  Avatar,
  Drawer,
  Button
} from "antd";

const { Header } = Layout;
const { SubMenu } = Menu;

const Nav = props => {
  const { id, leftSideDrawerComponent, rightSideDrawerComponent } = props;

  const [current, setCurrent] = useState(id || "");
  const [showLeftDrawer, setShowLeftDrawer] = useState(false);
  const [showRightDrawer, setShowRightDrawer] = useState(false);

  const handleShowLeftDrawer = () => {
    setShowLeftDrawer(true);
  };
  const handleHideLeftDrawer = () => {
    setShowLeftDrawer(false);
  };

  const handleShowRightDrawer = () => {
    setShowRightDrawer(true);
  };
  const handleHideRightDrawer = () => {
    setShowRightDrawer(false);
  };

  const handleClick = e => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  let leftSideNavbarComp, leftSideDrawerComp;
  if (leftSideDrawerComponent) {
    leftSideNavbarComp = (
      <Row type="flex">
        <Col md={0}>
          <Button
            icon="menu"
            style={{ marginRight: 8 }}
            onClick={handleShowLeftDrawer}
          />
        </Col>
        <Col md={24}>
          <img src="/static/images/logo.png" alt="logo" style={{ width: 72 }} />
        </Col>
      </Row>
    );

    leftSideDrawerComp = (
      <Drawer
        placement="left"
        closable={false}
        onClose={handleHideLeftDrawer}
        visible={showLeftDrawer}
      >
        {leftSideDrawerComponent}
      </Drawer>
    );
  } else {
    leftSideNavbarComp = (
      <img src="/static/images/logo.png" alt="logo" style={{ width: 72 }} />
    );
  }

  const MenuComponent = () => (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      style={{ border: "none" }}
    >
      <Menu.Item key="home">
        <Link prefetch href="/">
          <a rel="noopener noreferrer">
            <Icon type="home" />
            หน้าแรก
          </a>
        </Link>
      </Menu.Item>

      <Menu.Item key="mail">
        <Badge count={0} overflowCount={99}>
          <Icon type="mail" />
          ข้อความ
        </Badge>
      </Menu.Item>

      <Menu.Item key="notification">
        <Badge count={0} overflowCount={99}>
          <Icon type="notification" />
          แจ้งเตือน
        </Badge>
      </Menu.Item>

      <SubMenu
        title={
          <span className="submenu-title-wrapper">
            <Icon type="user" />
            นายชูพงศ์
          </span>
        }
      >
        <Menu.Item key="profile">
          <Link prefetch href="/profile">
            <a rel="noopener noreferrer">
              <Icon type="idcard" />
              เพจของฉัน
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="setting:2">
          <Icon type="book" /> ความรู้ที่บันทึกไว้
        </Menu.Item>
        <Menu.Item key="setting:3">
          <Icon type="info-circle" /> ข้อมูลส่วนตัว
        </Menu.Item>
        <Menu.Item key="setting:4">
          <Icon type="logout" /> ออกจากระบบ
        </Menu.Item>
      </SubMenu>
    </Menu>
  );

  let rightSideNavbarComp, rightSideDrawerComp;
  if (rightSideDrawerComponent) {
    rightSideNavbarComp = (
      <Row type="flex" justify="end" className="full-width" >
        <Col xs={20} sm={22} md={22} lg={24}>
          <MenuComponent />
        </Col>
        <Col xs={4} sm={2} md={2} lg={0}>
          <Button icon="menu" onClick={handleShowRightDrawer} />
        </Col>
      </Row>
    );

    rightSideDrawerComp = (
      <Drawer
        placement="right"
        closable={false}
        onClose={handleHideRightDrawer}
        visible={showRightDrawer}
      >
        {rightSideDrawerComponent}
      </Drawer>
    );
  } else {
    rightSideNavbarComp = <MenuComponent />;
  }

  return (
    <Header>
      <Row type="flex" justify="space-between" className="full-width">
        <Col xs={8} md={4} lg={3}>
          {leftSideNavbarComp}
        </Col>
        <Col xs={16} md={20} lg={21} className="nav-menu">
          {rightSideNavbarComp}
        </Col>
      </Row>

      {leftSideDrawerComp}
      {rightSideDrawerComp}
    </Header>
  );
};

export default Nav;

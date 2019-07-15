import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import {
  Menu,
  Dropdown,
  Avatar,
  Icon,
  Row,
  Col,
  Card,
  Typography,
  Button
} from "antd";
import uuid from "uuid";
import useToggle from "../hooks/useToggle";

const { Title, Text } = Typography;

const ListContentItem = props => {
  const { data } = props;

  const [isBookmark, toggleIsBookmark] = useToggle(false);
  const [isLiked, toggleIsLiked] = useToggle(false);

  const onClickComment = e => {
    e.preventDefault();
    return Router.push("/content#area-comments", "/content#area-comments", {
      shallow: true
    });
  };

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Icon type="edit" /> แก้ไข
      </Menu.Item>
      <Menu.Item key="1">
        <Icon type="eye-invisible" /> ซ่อน
      </Menu.Item>
    </Menu>
  );

  return (
    <Card
      size="small"
      title={
        <Row type="flex">
          <Col style={{ padding: "0 8px 0 0" }}>
            <Avatar size={40} src={`/static/images/${data.avatar}`} />
          </Col>
          <Col className="pad-0 mar-0">
            <Link prefetch href="/profile">
              <a><Text strong>{data.name}</Text></a>
            </Link>
            <br />
            <Text type="secondary">
              <Icon type="clock-circle" /> {data.createdAt} นาทีก่อน
            </Text>
          </Col>
        </Row>
      }
      extra={[
        <Button
          type={isBookmark ? "primary" : "default"}
          icon="book"
          shape="circle"
          style={{ marginRight: 8 }}
          key={uuid()}
          onClick={toggleIsBookmark}
        />,
        <Button
          type="default"
          icon="share-alt"
          shape="circle"
          style={{ marginRight: 8 }}
          key={uuid()}
        />,
        <Dropdown overlay={menu} trigger={["click"]} key={uuid()}>
          <Button shape="circle" className="ant-dropdown-link" type="default" icon="setting" />
        </Dropdown>
      ]}
      actions={[
        <Button
          type="link"
          key={uuid()}
          onClick={toggleIsLiked}
          style={isLiked ? { color: "#d45744" } : { color: "#969696" }}
        >
          <Icon type="like" /> <span className="hide-xs">ถูกใจ</span> &nbsp;{data.liked}
        </Button>,
        <Button
          type="link"
          key={uuid()}
          style={{ color: "#969696" }}
          onClick={onClickComment}
        >
          <Icon type="message" /> <span className="hide-xs">คอมเมนต์</span> &nbsp;{data.comments}
        </Button>,
        <Button
          type="link"
          key={uuid()}
          style={{ color: "#969696" }}
          onClick={onClickComment}
        >
          <Icon type="eye" /> <span className="hide-xs">อ่านแล้ว</span> &nbsp;{data.view}
        </Button>
      ]}
      style={{ marginBottom: 16 }}
    >
      <p className="full-width">
        <Text>{data.content}</Text>
        <Link prefetch href="/content">
          <a>...ดูเพิ่มเติม</a>
        </Link>
      </p>
    </Card>
  );
};

export default ListContentItem;

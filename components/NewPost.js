import React from "react";
import Link from "next/link";
import Router from "next/router";
import { Layout, Menu, Avatar, Icon, Row, Col, Card, Button } from "antd";

const NewPost = props => {

  const onClickPost = e => {
    e.preventDefault();
    return Router.push('/post', '/post', {
      shallow: true
    });
  };

  return (
    <Card
      size="small"
      style={{ borderTop: "5px solid #d45744", marginBottom: 16 }}
    >
      <Row
        type="flex"
        justify="space-between"
        align="middle"
        className="full-width"
      >
        <Col lg={12}>
          <Avatar size={50} src="/static/images/00367183.jpg" />
        </Col>
        <Col lg={12} style={{ textAlign: "right" }}>
          <Button type="primary" shape="round" onClick={onClickPost}>
            <Icon type="bulb" />
            คุณกำลังจะแชร์ความรู้อะไรอยู่
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default NewPost;

import React from "react";
import Link from "next/link";
import { Layout, Row, Col } from "antd";

import OneColumnLayout from "../layouts/OneColumnLayout";

const TwoColumnLayout = props => {
  const {
    htmlTitle,
    navID,
    leftSideComponent,
    leftSideDrawerComponent,
    rightSideDrawerComponent,
    children
  } = props;
  return (
    <OneColumnLayout
      htmlTitle={htmlTitle}
      navID={navID}
      leftSideDrawerComponent={leftSideDrawerComponent}
      rightSideDrawerComponent={rightSideDrawerComponent}
    >
      <Layout>
        <Row >
          <Col xs={0} sm={8} md={8} lg={6} className="container-left-side">
            {leftSideComponent}
          </Col>
          <Col xs={24} sm={16} md={16} lg={18} className="container-main-side">
            {children}
          </Col>
        </Row>
      </Layout>
    </OneColumnLayout>
  );
};

export default TwoColumnLayout;

import React from "react";
import Link from "next/link";
import { Layout, Row, Col } from "antd";

import TwoColumnLayout from "../layouts/TwoColumnLayout";

const ThreeColumnLayout = props => {
  const {
    htmlTitle,
    navID,
    leftSideComponent,
    leftSideDrawerComponent,
    rightSideComponent,
    rightSideDrawerComponent,
    pinComponent,
    children
  } = props;
  return (
    <TwoColumnLayout
      htmlTitle={htmlTitle}
      navID={navID}
      leftSideComponent={leftSideComponent}
      leftSideDrawerComponent={leftSideDrawerComponent}
      rightSideDrawerComponent={rightSideDrawerComponent}
    >
      <Row type="flex" >
        <Col xs={24} sm={24} lg={0} order={1} className="container-pin-side">
          {pinComponent}
        </Col>
        <Col xs={24} md={24} lg={16} className="container-center-side">
          <Row>
            <Col xs={0} sm={0} lg={24}>
              {pinComponent}
            </Col>
          </Row>
          
          {children}
        </Col>
        <Col xs={24} md={24} lg={8} className="container-right-side">
        {rightSideComponent}
        </Col>
      </Row>
    </TwoColumnLayout>
  );
};

export default ThreeColumnLayout;

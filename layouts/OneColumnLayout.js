import React from "react";
import Link from "next/link";
import Head from "../components/Head";

import "../customs/styles.less";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

const OneColumnLayout = props => {
  const { navID, leftSideDrawerComponent, rightSideDrawerComponent } = props;
  return (
    <div>
      <Head title={props.htmlTitle} />
      <Nav
        id={navID}
        leftSideDrawerComponent={leftSideDrawerComponent}
        rightSideDrawerComponent={rightSideDrawerComponent}
      />
      <div className="container pad-t-2 pad-b-2">{props.children}</div>
      <Footer />
    </div>
  );
};

export default OneColumnLayout;

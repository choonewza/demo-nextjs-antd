import React from "react";
import Link from "next/link";
import axios from "axios";
import ThreeColumnLayout from "../layouts/ThreeColumnLayout";
import LeftSidePanel from "../components/LeftSidePanel";
import RightSidePanel from "../components/RightSidePanel";
import NewPost from "../components/NewPost";
import ListContents from "../components/ListContents";

import { Row, Col } from "antd";

const onPanelChange = (value, mode) => {
  console.log(value, mode);
};

const Home = props => {
  const { userAgent, topten, contents, categories } = props;
  return (
    <ThreeColumnLayout
      navID="home"
      leftSideComponent={<LeftSidePanel />}
      leftSideDrawerComponent={<LeftSidePanel />}
      rightSideComponent={<RightSidePanel />}
      rightSideDrawerComponent={<RightSidePanel />}
      pinComponent={<NewPost />}
    >
      <ListContents data={contents} />

    </ThreeColumnLayout>
  );
};

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  const contentsResult = await axios.get("http://localhost:3000/api/contents");
  const contents = await contentsResult.data;
  const toptenResult = await axios.get("http://localhost:3000/api/topten");
  const topten = await toptenResult.data;
  const categoriesResult = await axios.get(
    "http://localhost:3000/api/categories"
  );
  const categories = await categoriesResult.data;
  return { userAgent, topten, contents, categories };
};

export default Home;

import React from "react";
import Link from "next/link";
import axios from "axios";
import TwoColumnLayout from "../layouts/TwoColumnLayout";
import LeftSidePanel from "../components/LeftSidePanel";
import RightSidePanel from "../components/RightSidePanel";
import NewPost from "../components/NewPost";
import ListContents from "../components/ListContents";

import { Row, Col } from "antd";

const onPanelChange = (value, mode) => {
  console.log(value, mode);
};

const Profile = props => {
  const { userAgent, contents, categories } = props;
  return (
    <TwoColumnLayout
      leftSideComponent={<LeftSidePanel />}
      leftSideDrawerComponent={<LeftSidePanel />}
      rightSideComponent={<RightSidePanel />}
      rightSideDrawerComponent={<RightSidePanel />}
      pinComponent={<NewPost />}
    >
      <ListContents data={contents} />

    </TwoColumnLayout>
  );
};

Profile.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  const contentsResult = await axios.get("http://localhost:3000/api/profile");
  const contents = await contentsResult.data;
  const categoriesResult = await axios.get(
    "http://localhost:3000/api/categories"
  );
  const categories = await categoriesResult.data;
  return { userAgent, contents, categories };
};

export default Profile;

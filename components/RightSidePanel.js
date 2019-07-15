import Link from "next/link";
import { Layout, Menu, Avatar, Icon, Row, Col, Card, Typography } from "antd";

import Profile from "./Profile";

import SmallNews from "../components/SmallNews"

const { Title, Text } = Typography;

const RightSidePanel = props => {
  return (
    <Layout>
      <SmallNews className="mar-b-2"/>
    </Layout>
  );
};

export default RightSidePanel;

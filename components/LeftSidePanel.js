import Link from "next/link";
import { Layout, Menu, Avatar, Icon, Row, Col, Card, Typography } from "antd";

import Profile from "./Profile";

const { Title, Text } = Typography;

const LeftSidePanel = props => {
  return (
    <Layout>
      <Profile showMoreLink/>
    </Layout>
  );
};

export default LeftSidePanel;

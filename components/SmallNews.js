import React from "react";
import Link from "next/link";
import { Icon, Card, Typography } from "antd";

const { Title } = Typography;

const SmallNews = props => {
  const {className} = props;
  return (
    <Card
      title={
        <Title level={4} className="color-header">
          <Icon type="sound" /> ข่าวประชาสัมพันธ์
        </Title>
      }
      actions={[
        <Link prefetch href="/news">
          <a>- ดูเพิ่มเติม -</a>
        </Link>
      ]}
      className={className}
      style={{ borderTop: "5px solid #d45744" }}
    >
      <ul className="full-width mar-0" style={{ paddingLeft: 16 }}>
        <li>
          <Link prefetch href="#">
            <a>หัวข้อข่าวที่ 1</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="#">
            <a>หัวข้อข่าวที่ 2</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="#">
            <a>หัวข้อข่าวที่ 3</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="#">
            <a>หัวข้อข่าวที่ 4</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="#">
            <a>หัวข้อข่าวที่ 5</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="#">
            <a>หัวข้อข่าวที่ 6</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="#">
            <a>หัวข้อข่าวที่ 7</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="#">
            <a>หัวข้อข่าวที่ 8</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="#">
            <a>หัวข้อข่าวที่ 9</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="#">
            <a>หัวข้อข่าวที่ 10</a>
          </Link>
        </li>
      </ul>
    </Card>
  );
};

export default SmallNews;

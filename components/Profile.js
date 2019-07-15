import Link from "next/link";
import { Layout, Menu, Avatar, Icon, Row, Col, Card, Typography } from "antd";
import Grid from "antd/lib/card/Grid";

const { Title, Text } = Typography;

const ProfileHeader = props => {
  return (
    <div className="profile-header">
      <div className="profile-cover" />
      <div className="profile-detail">
        <Avatar
          size={120}
          src="/static/images/00367183.jpg"
          className="profile-avatar"
        />
        <Title level={4} className="profile-name">
          นายชูพงศ์ ภู่ภมร
        </Title>
        <Text type="secondary" className="profile-info">
          "คนจำนวนมากไปไม่ถึงความฝัน มิใช่เพราะพวกเขาอ่อนด้อยกว่าคนอื่น
          หากเพราะพวกเขาทิ้งความอดทนใว้กลางทางต่างหาก"
        </Text>
      </div>
      <style jsx global>{`
        .profile-header .profile-cover {
          height: 90px;
          display: grid;
          justify-content: center;
          align-items: center;
          background: rgb(212, 87, 68);
        }
        .profile-header .profile-detail {
          text-align: center;
          margin-top: -63px;
        }
        .profile-header .profile-avatar {
          border: 5px solid #fff;
        }
        .profile-header .profile-name {
          text-align: center;
          margin-top: 12px;
          color: #d45744 !important;
        }
        .profile-header .profile-info {
          display: block;
          text-align: center;
          color: #999999;
          margin-top: 10px;
          padding: 0 8px 0 8px;
        }
      `}</style>
    </div>
  );
};

const Profile = props => {
  const { showMoreLink } = props;
  return (
    <Card
      cover={<ProfileHeader />}
      actions={
        showMoreLink
          ? [
              <Link prefetch href="/profile">
                <a>- ดูเพิ่มเติม -</a>
              </Link>
            ]
          : []
      }
    >
      <div
        style={{
          borderTop: "1px solid #eee",
          paddingTop: 16,
          textAlign: "center"
        }}
      >
        <div
          style={{
            paddingBottom: 16,
            textAlign: "center"
          }}
        >
          <Title level={3} style={{ color: "#d45744" }}>
            LV.50
          </Title>
        </div>
        <div
          style={{
            borderTop: "1px solid #eee",
            paddingTop: 16,
            textAlign: "center"
          }}
        >
          <Title level={3} style={{ color: "#d45744" }}>
            ผู้แบ่งปัน
          </Title>
        </div>
      </div>
    </Card>
  );
};

export default Profile;

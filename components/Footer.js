import Link from "next/link";
import { Layout, Typography, Icon } from "antd";

const { Title, Text } = Typography;

const Footer = props => {
  return (
    <Layout.Footer>
      <div className="container align-center">
        <p>
          <Text style={{fontSize:20}}>
            เรียนรู้จากงาน ประสบการแบ่งปัน เรียนรู้ร่วมกัน สร้างสรรค์ CAT
          </Text>
        </p>
          <Text type="secondary">@choonewza</Text>
      </div>
    </Layout.Footer>
  );
};

export default Footer;

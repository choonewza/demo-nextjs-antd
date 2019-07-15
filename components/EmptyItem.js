import React from "react";
import { Card, Empty } from "antd";

const EmptyItem = props => (
  <Card className="mar-b-item">
    <Empty {...props}>
        {props.children}
    </Empty>
  </Card>
);

export default EmptyItem;

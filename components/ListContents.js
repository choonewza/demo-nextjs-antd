import React from "react";

import ListContentItem from "../components/ListContentItem";
import EmptyItem from "../components/EmptyItem";
import { Pagination } from "antd";

const ListContents = props => {
  const { data } = props;

  if (!data) {
    return <EmptyItem />;
  }

  return (
    <>
      {data.map((item, index) => (
        <ListContentItem data={item} key={item.id} />
      ))}
      <div className="align-right">
        <Pagination defaultCurrent={6} total={500} />
      </div>
    </>
  );
};

export default ListContents;

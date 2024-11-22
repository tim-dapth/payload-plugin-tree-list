import React from "react";
import { Gutter } from "@payloadcms/ui";
import { Table } from "../Table/index.js";

export const TreeListView: React.FC<any> = ({ columnState, data }) => {
  return (
    <Gutter>
      <Table columns={columnState} data={data.docs} />
    </Gutter>
  );
};

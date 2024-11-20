import type { PayloadServerReactComponent, SanitizedConfig } from "payload";

import React from "react";
import { Table } from "../Table/index.js";

export const TreeListView: React.FC<PayloadServerReactComponent<SanitizedConfig>> = ({
  data,
  columnState,
}) => {
  return <Table appearance={"default"} columns={columnState} data={data} />;
};

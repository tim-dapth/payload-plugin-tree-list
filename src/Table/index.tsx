"use client";
import type { ClientField, ClientUser, PaginatedDocs } from "payload";
import { ChevronIcon, SelectRow } from "@payloadcms/ui";
import React, { useMemo, useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";

import { generateTreeList } from "../utilities/generateTreeList.js";
import "./index.scss";

const baseClass = "table";

export type Column = {
  readonly accessor: string;
  readonly active: boolean;
  readonly CustomLabel?: React.ReactNode;
  readonly field: ClientField;
  readonly Heading: React.ReactNode;
  readonly renderedCells: React.ReactNode[];
};

export type Props = {
  readonly columns?: any;
  readonly data: PaginatedDocs["docs"];
  readonly isChildren?: number;
};

export const Table: React.FC<Props> = ({ columns, data, isChildren = 0 }) => {
  const [openIndexes, setOpenIndexes] = useState<boolean[]>(Array(data.length).fill(false));
  const activeColumns = columns?.filter(col => col?.active);
  const docs = isChildren ? data : useMemo(() => generateTreeList(data), [data]);

  if (!activeColumns || activeColumns.length === 0) {
    return <div>No columns selected</div>;
  }

  const gridRowClass = {
    gridTemplateColumns: `46px repeat(${activeColumns.length - 1}, minmax(100px, 1fr)) 46px`,
  };

  const toggleCollapsible = index => {
    setOpenIndexes(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className={baseClass}>
      <div role="table" className="table-collapsible">
        <div
          role="row"
          className={`table-collapsible__header ${isChildren > 0 ? "sr-only" : ""}`}
          style={gridRowClass}
        >
          {activeColumns.map((col, i) => (
            <div role="columnheader" id={`heading-${col.accessor}`} key={`table-header-${i}`}>
              {col.Heading}
            </div>
          ))}
          <div role="columnheader" />
        </div>
        {docs &&
          docs.map((row, rowIndex) => {
            const hasChildren = !!(row.children as Record<string, unknown>[])?.length;
            const lastChild = rowIndex === docs.length - 1;
            return (
              <Collapsible.Root
                open={openIndexes[row.originalIndex]}
                onOpenChange={() => toggleCollapsible(row.originalIndex)}
                key={`table-cell-${row.originalIndex}`}
              >
                <div
                  role="row"
                  className={`row-${row.originalIndex + 1}${(row.originalIndex + 1) % 2 !== 0 ? " odd" : ""}${isChildren ? " table-collapsible__row-child" : ""}${lastChild ? " table-collapsible__row-last" : ""}`}
                  style={gridRowClass}
                >
                  {activeColumns.map((col, colIndex) => {
                    const Component = col.renderedCells[row.originalIndex]?.type || "span";
                    return (
                      <div role="cell" className={`cell-${col.accessor}`} key={colIndex}>
                        <Component {...col.renderedCells[row.originalIndex].props} />
                      </div>
                    );
                  })}
                  <div role="cell" className="cell-trigger">
                    <Collapsible.Trigger asChild>
                      {hasChildren && (
                        <button
                          className="table-collapsible__trigger"
                          type="button"
                          aria-label="toggle children elements"
                        >
                          <ChevronIcon direction={openIndexes[row.originalIndex] ? "up" : "down"} />
                        </button>
                      )}
                    </Collapsible.Trigger>
                  </div>
                </div>
                <Collapsible.Content>
                  <Table
                    isChildren={isChildren + 1}
                    data={row.children as Record<string, unknown>[]}
                    columns={columns}
                  />
                </Collapsible.Content>
              </Collapsible.Root>
            );
          })}
      </div>
    </div>
  );
};

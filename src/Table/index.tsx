"use client";
import type { CellComponentProps, ClientField } from "payload";
import { useTableColumns, RenderComponent, TableCellProvider, ChevronIcon } from "@payloadcms/ui";
import { deepMergeSimple } from "@payloadcms/translations/utilities";
import React, { useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";

import { generateTreeList } from "../utils/generateTreeList.js";

const baseClass = "table";

export type Column = {
  readonly accessor: string;
  readonly active: boolean;
  readonly cellProps?: Partial<CellComponentProps>;
  readonly Heading: React.ReactNode;
};

export type Props = {
  readonly appearance?: "condensed" | "default";
  readonly columns?: Column[];
  readonly customCellContext?: Record<string, unknown>;
  readonly data: Record<string, unknown>[];
  readonly fields: ClientField[];
  readonly isChildren?: number;
};

export const Table: React.FC<Props> = ({
  appearance,
  columns: columnsFromProps,
  customCellContext,
  data: incommingData,
  fields,
  isChildren = 0,
}) => {
  const data = generateTreeList(incommingData);
  const [openIndexes, setOpenIndexes] = useState<boolean[]>(Array(data.length).fill(false));
  const { columns: columnsFromContext } = useTableColumns();
  const columns = columnsFromProps || columnsFromContext;
  const activeColumns = columns?.filter(col => col?.active);

  if (!activeColumns || activeColumns.length === 0) {
    return <div>No columns selected</div>;
  }

  const toggleCollapsible = index => {
    setOpenIndexes(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div
      className={[baseClass, appearance && `${baseClass}--appearance-${appearance}`]
        .filter(Boolean)
        .join(" ")}
    >
      <table cellPadding="0" cellSpacing="0" className="table-collapsible">
        <thead className={isChildren > 0 ? "sr-only" : ""}>
          <tr>
            {activeColumns.map((col, i) => (
              <th id={`heading-${col.accessor}`} key={i}>
                {col.Heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((row, rowIndex) => {
              const hasChildren = !!(row.children as Record<string, unknown>[])?.length;
              return (
                <Collapsible.Root
                  className="CollapsibleRoot"
                  open={openIndexes[rowIndex]}
                  onOpenChange={() => toggleCollapsible(rowIndex)}
                  asChild
                  key={rowIndex}
                >
                  <>
                    <tr className={`row-${rowIndex + 1}${(rowIndex + 1) % 2 !== 0 ? " odd" : ""}`}>
                      {activeColumns.map((col, colIndex) => {
                        const isLink =
                          (colIndex === 0 && col.accessor !== "_select") ||
                          (colIndex === 1 && activeColumns[0]?.accessor === "_select");

                        return (
                          <td className={`cell-${col.accessor}`} key={colIndex}>
                            <TableCellProvider
                              cellData={row[col.accessor]}
                              cellProps={deepMergeSimple({ link: isLink }, col.cellProps)}
                              columnIndex={colIndex}
                              customCellContext={customCellContext}
                              rowData={row}
                            >
                              <RenderComponent
                                clientProps={col.cellProps}
                                mappedComponent={col.cellProps?.field?.admin?.components?.Cell}
                              />
                            </TableCellProvider>
                          </td>
                        );
                      })}
                      <td className="cell-trigger">
                        <Collapsible.Trigger asChild>
                          {hasChildren && (
                            <button
                              className="table-collapsible__trigger"
                              type="button"
                              aria-label="toggle children elements"
                            >
                              <ChevronIcon direction={openIndexes[rowIndex] ? "up" : "down"} />
                            </button>
                          )}
                        </Collapsible.Trigger>
                      </td>
                    </tr>
                    {hasChildren && (
                      <tr>
                        <td
                          className={`cell-collapsible${isChildren === 0 ? " first-child" : ""}`}
                          colSpan={activeColumns.length + 1}
                        >
                          <Collapsible.Content>
                            <Table
                              customCellContext={customCellContext}
                              data={row.children as Record<string, unknown>[]}
                              fields={fields}
                              isChildren={isChildren + 1}
                            />
                          </Collapsible.Content>
                        </td>
                      </tr>
                    )}
                  </>
                </Collapsible.Root>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

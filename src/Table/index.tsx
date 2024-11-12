"use client";
import type { CellComponentProps, ClientField } from "payload";
import { useTableColumns, RenderComponent, TableCellProvider, ChevronIcon } from "@payloadcms/ui";
import { deepMergeSimple } from "@payloadcms/translations/utilities";
import React, { useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";

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
  data,
  fields,
  isChildren = 0,
}) => {
  const [openIndexes, setOpenIndexes] = useState<boolean[]>(Array(data.length).fill(false));
  const { columns: columnsFromContext } = useTableColumns();
  const columns = columnsFromProps || columnsFromContext;
  const activeColumns = columns?.filter(col => col?.active);
  const gridRowClass = {
    gridTemplateColumns: `46px repeat(${activeColumns.length - 1}, minmax(100px, 1fr)) 46px`,
  };

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
        {data &&
          data.map((row, rowIndex) => {
            const hasChildren = !!(row.children as Record<string, unknown>[])?.length;
            const lastChild = rowIndex === data.length - 1;
            return (
              <Collapsible.Root
                open={openIndexes[rowIndex]}
                onOpenChange={() => toggleCollapsible(rowIndex)}
                key={`table-cell-${rowIndex}`}
              >
                <div
                  role="row"
                  className={`row-${rowIndex + 1}${(rowIndex + 1) % 2 !== 0 ? " odd" : ""}${isChildren ? " table-collapsible__row-child" : ""}${lastChild ? " table-collapsible__row-last" : ""}`}
                  style={gridRowClass}
                >
                  {activeColumns.map((col, colIndex) => {
                    const isLink =
                      (colIndex === 0 && col.accessor !== "_select") ||
                      (colIndex === 1 && activeColumns[0]?.accessor === "_select");

                    return (
                      <div role="cell" className={`cell-${col.accessor}`} key={colIndex}>
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
                          <ChevronIcon direction={openIndexes[rowIndex] ? "up" : "down"} />
                        </button>
                      )}
                    </Collapsible.Trigger>
                  </div>
                </div>
                <Collapsible.Content>
                  <Table
                    customCellContext={customCellContext}
                    data={row.children as Record<string, unknown>[]}
                    fields={fields}
                    isChildren={isChildren + 1}
                  />
                </Collapsible.Content>
              </Collapsible.Root>
            );
          })}
      </div>
    </div>
  );
};

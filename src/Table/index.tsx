"use client";
import type { ClientField } from "payload";
import { Table as PayloadTable, ChevronIcon } from "@payloadcms/ui";
import React, { useMemo, useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

import { TreeListIcon } from "../icons/TreeList/index.js";
import { ListIcon } from "../icons/List/index.js";
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
  readonly appearance?: "condensed" | "default";
  readonly columns?: any;
  readonly data: any;
  readonly isChildren?: number;
};

export const Table: React.FC<Props> = ({ appearance, columns, data, isChildren = 0 }) => {
  const [view, setView] = useState<"list" | "tree">("tree");
  const [openIndexes, setOpenIndexes] = useState<boolean[]>(Array(data.length).fill(false));
  const activeColumns = columns?.filter(col => col?.active);
  const docs = useMemo(() => generateTreeList(data.docs), [data]);

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

  return view === "list" ? (
    <PayloadTable appearance={appearance} columns={columns} data={data.docs} />
  ) : (
    <>
      <div className={`${baseClass}__toggle`}>
        <ToggleGroup.Root
          className={`${baseClass}__toggle-group`}
          type="single"
          defaultValue="tree"
          onValueChange={value => setView(value as "list" | "tree")}
          aria-label="Toggle between list and tree view"
        >
          <ToggleGroup.Item
            className={`${baseClass}__toggle-group-item`}
            value="list"
            aria-label="List view"
          >
            <ListIcon />
          </ToggleGroup.Item>
          <ToggleGroup.Item
            className={`${baseClass}__toggle-group-item`}
            value="tree"
            aria-label="Tree view"
          >
            <TreeListIcon />
          </ToggleGroup.Item>
        </ToggleGroup.Root>
      </div>
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
          {(docs?.length || 0) > 0 &&
            docs.map((row, rowIndex) => {
              const hasChildren = !!(row.children as Record<string, unknown>[])?.length;
              const lastChild = rowIndex === docs.length - 1;
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
                      console.log({ col, row });
                      return (
                        <div role="cell" className={`cell-${col.accessor}`} key={colIndex}>
                          {/* {col.renderedCells[rowIndex]} */}Content
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
                      data={row.children as Record<string, unknown>[]}
                      isChildren={isChildren + 1}
                    />
                  </Collapsible.Content>
                </Collapsible.Root>
              );
            })}
        </div>
      </div>
    </>
  );
};

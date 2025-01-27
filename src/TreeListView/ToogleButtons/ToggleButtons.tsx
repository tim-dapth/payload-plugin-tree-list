/* eslint-disable jsx-a11y/control-has-associated-label */
"use client";
import { usePathname, useRouter } from "next/navigation.js";
import { use, useEffect, useState } from "react";

import { TableListIcon } from "./icons/TableListIcon.js";
import { TreeListIcon } from "./icons/TreeListIcon.js";

export function ToggleButtons({ searchParams }) {
  const router = useRouter();
  const pathname = usePathname();
  const [view, setView] = useState<"table" | "tree">(
    searchParams?.["view"] === "tree" ? "tree" : "table",
  );

  const handleChange = e => {
    const params = new URLSearchParams();
    setView(e.target.value);
    params.set("view", e.target.value);
    router.push(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    if (!searchParams?.["view"]) {
      setView("table");
    }
  }, [searchParams]);

  return (
    <nav className="table-toggle-buttons">
      <ul>
        <li className={`table-toggle-buttons__item${view === "table" ? " current" : ""}`}>
          <input
            checked={view === "table"}
            id="toggleButtonsTable"
            name="table-view"
            onChange={handleChange}
            type="radio"
            value="table"
          />
          <label htmlFor="toggleButtonsTable">
            <TableListIcon /> Table
          </label>
        </li>
        <li className={`table-toggle-buttons__item${view === "tree" ? " current" : ""}`}>
          <input
            checked={view === "tree"}
            id="toggleButtonsTree"
            name="table-view"
            onChange={handleChange}
            type="radio"
            value="tree"
          />
          <label htmlFor="toggleButtonsTree">
            <TreeListIcon /> Tree
          </label>
        </li>
      </ul>
    </nav>
  );
}

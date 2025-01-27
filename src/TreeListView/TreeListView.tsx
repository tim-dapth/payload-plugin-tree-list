import { DefaultListView } from "@payloadcms/ui";

import { Table } from "./Table/Table.js";
import { ToggleButtons } from "./ToogleButtons/ToggleButtons.js";
import "./styles.scss";

export function TreeListView({
  collectionSlug,
  columnState,
  data,
  disableBulkDelete,
  disableBulkEdit,
  enableRowSelections,
  hasCreatePermission,
  listPreferences,
  newDocumentURL,
  preferenceKey,
  renderedFilters,
  searchParams,
  Table: DefaultTable,
}) {
  return (
    <DefaultListView
      BeforeListTable={<ToggleButtons searchParams={searchParams} />}
      collectionSlug={collectionSlug}
      columnState={columnState}
      disableBulkDelete={disableBulkDelete}
      disableBulkEdit={disableBulkEdit}
      enableRowSelections={enableRowSelections}
      hasCreatePermission={hasCreatePermission}
      listPreferences={listPreferences}
      newDocumentURL={newDocumentURL}
      preferenceKey={preferenceKey}
      renderedFilters={renderedFilters}
      Table={
        searchParams?.["view"] === "tree" ? (
          <Table columns={columnState} data={data.docs} enableRowSelections={enableRowSelections} />
        ) : (
          DefaultTable
        )
      }
    />
  );
}

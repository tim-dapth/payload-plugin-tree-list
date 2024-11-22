import React, { Fragment } from "react";
import { Button, Gutter } from "@payloadcms/ui";
import { getTranslation } from "@payloadcms/translations";
import LinkImport from "next/link.js";
const Link = (LinkImport.default || LinkImport) as unknown as typeof LinkImport.default;

import { Table } from "../Table/index.js";

const baseClass = "collection-list";
const listBaseClass = "list-header";

export const TreeListView: React.FC<any> = ({
  collectionConfig,
  collectionSlug,
  columnState,
  data,
  hasCreatePermission,
  i18n,
  newDocumentURL,
}) => {
  return (
    <div className={`${baseClass} ${baseClass}--${collectionSlug}`}>
      <Gutter className={`${baseClass}__wrap`}>
        <header className={listBaseClass}>
          <h1>{getTranslation(collectionConfig?.labels?.plural, i18n)}</h1>
          {hasCreatePermission && (
            <>
              <Button
                aria-label={i18n.t("general:createNewLabel", {
                  label: getTranslation(collectionConfig?.labels?.singular, i18n),
                })}
                buttonStyle="pill"
                el={"link"}
                Link={Link}
                size="small"
                to={newDocumentURL}
              >
                {i18n.t("general:createNew")}
              </Button>
            </>
          )}
        </header>
        <Table columns={columnState} data={data.docs} />
        {data.docs.length === 0 && (
          <div className={`${baseClass}__no-results`}>
            <p>
              {i18n.t("general:noResults", {
                label: getTranslation(collectionConfig.labels?.plural, i18n),
              })}
            </p>
            {hasCreatePermission && newDocumentURL && (
              <Fragment>
                <Button el="link" Link={Link} to={newDocumentURL}>
                  {i18n.t("general:createNewLabel", {
                    label: getTranslation(collectionConfig.labels?.singular, i18n),
                  })}
                </Button>
              </Fragment>
            )}
          </div>
        )}
      </Gutter>
    </div>
  );
};

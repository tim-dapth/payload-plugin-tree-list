// // import type { AdminViewProps, ServerProps } from "payload";

// // import { DefaultTemplate } from "@payloadcms/next/templates";
// // import { Gutter } from "@payloadcms/ui";
// // import React from "react";
// // import { Table } from "../Table/index.js";

// // export const TreeListView: React.FC<ServerProps> = args => {
// //   console.log(args, typeof args, args.collectionConfig);
// //   const {
// //     columnState,
// //     data,
// //     i18n,
// //     locale,
// //     params,
// //     permissions,
// //     payload,
// //     searchParams,
// //     user,
// //     visibleEntities,
// //   } = args;
// //   return (
// //     <DefaultTemplate
// //       i18n={i18n}
// //       locale={locale}
// //       params={params}
// //       payload={payload}
// //       permissions={permissions}
// //       searchParams={searchParams}
// //       user={user || undefined}
// //       visibleEntities={visibleEntities}
// //     >
// //       <Gutter>
// //         <Table appearance={"default"} columns={columnState} data={(data as any).docs} />
// //       </Gutter>
// //     </DefaultTemplate>
// //   );
// // };

// import { ServerProps } from "payload";
// import {
//   DefaultListView,
//   Gutter,
//   HydrateAuthProvider,
//   ListComponentClientProps,
//   ListComponentServerProps,
//   ListQueryProvider,
//   ListViewClientProps,
// } from "@payloadcms/ui";
// import { RenderServerComponent } from "@payloadcms/ui/elements/RenderServerComponent";
// import React, { Fragment } from "react";
// import { renderListViewSlots } from "./renderListViewSlots.js";
// import { notFound } from "next/navigation.js";
// import { DefaultTemplate } from "@payloadcms/next/templates";

// export const renderListView = async ({
//   Table,
//   collectionConfig,
//   collectionSlug,
//   columnState,
//   data,
//   disableBulkDelete,
//   disableBulkEdit,
//   drawerSlug,
//   enableRowSelections,
//   i18n,
//   limit,
//   listPreferences,
//   locale,
//   newDocumentURL,
//   params,
//   payload,
//   permissions,
//   renderedFilters,
//   searchParams,
//   user,
//   visibleEntities,
// }: any): Promise<{
//   List: React.ReactNode;
// }> => {
//   // const preferenceKey = `${collectionSlug}-list`;

//   // const staticDescription =
//   //   typeof collectionConfig.admin.description === "function"
//   //     ? collectionConfig.admin.description({ t: i18n.t })
//   //     : collectionConfig.admin.description;

//   // const sharedClientProps: ListComponentClientProps = {
//   //   collectionSlug,
//   //   hasCreatePermission: permissions?.collections?.[collectionSlug]?.create?.permission,
//   //   newDocumentURL,
//   // };

//   // const sharedServerProps: ListComponentServerProps = {
//   //   collectionConfig,
//   //   i18n,
//   //   limit,
//   //   locale,
//   //   params,
//   //   payload,
//   //   permissions,
//   //   searchParams,
//   //   user,
//   // };

//   // const listViewSlots = renderListViewSlots({
//   //   clientProps: sharedClientProps,
//   //   collectionConfig,
//   //   description: staticDescription,
//   //   payload,
//   //   serverProps: sharedServerProps,
//   // });

//   // const clientProps: ListViewClientProps = {
//   //   ...listViewSlots,
//   //   ...sharedClientProps,
//   //   columnState,
//   //   disableBulkDelete,
//   //   disableBulkEdit,
//   //   enableRowSelections,
//   //   listPreferences,
//   //   renderedFilters,
//   //   Table,
//   // };

//   // const isInDrawer = Boolean(drawerSlug);

//   return {
//     List: (
//       <DefaultTemplate
//         i18n={i18n}
//         locale={locale}
//         params={params}
//         payload={payload}
//         permissions={permissions}
//         searchParams={searchParams}
//         user={user || undefined}
//         visibleEntities={visibleEntities}
//       >
//         <Gutter>
//           <Table appearance={"default"} columns={columnState} data={data.docs} />
//           {/* <RenderServerComponent
//               clientProps={clientProps}
//               Component={collectionConfig?.admin?.components?.views?.list?.Component}
//               Fallback={DefaultListView}
//               importMap={payload.importMap}
//               serverProps={{
//                 ...sharedServerProps,
//                 data,
//                 listPreferences,
//                 listSearchableFields: collectionConfig.admin.listSearchableFields,
//               }}
//             /> */}
//         </Gutter>
//       </DefaultTemplate>
//       // <Fragment>
//       //   <HydrateAuthProvider permissions={permissions} />
//       //   <ListQueryProvider
//       //     collectionSlug={collectionSlug}
//       //     data={data}
//       //     defaultLimit={limit}
//       //     defaultSort={searchParams.sort}
//       //     modifySearchParams={!isInDrawer}
//       //     preferenceKey={preferenceKey}
//       //   >
//       //     <RenderServerComponent
//       //       clientProps={clientProps}
//       //       Component={collectionConfig?.admin?.components?.views?.list?.Component}
//       //       Fallback={DefaultListView}
//       //       importMap={payload.importMap}
//       //       serverProps={{
//       //         ...sharedServerProps,
//       //         data,
//       //         listPreferences,
//       //         listSearchableFields: collectionConfig.admin.listSearchableFields,
//       //       }}
//       //     />
//       //   </ListQueryProvider>
//       // </Fragment>
//     ),
//   };
// };

// export const TreeListView: React.FC<any> = ({
//   Table,
//   columnState,
//   data,
//   i18n,
//   locale,
//   params,
//   payload,
//   permissions,
//   searchParams,
//   user,
//   visibleEntities,
// }) => {
//   // try {
//   //   const { List: RenderedList } = await renderListView({ ...args, enableRowSelections: true });
//   //   return RenderedList;
//   // } catch (error) {
//   //   if (error.message === "not-found") {
//   //     notFound();
//   //   } else {
//   //     console.error(error); // eslint-disable-line no-console
//   //   }
//   // }
//   return (
//     <DefaultTemplate
//       i18n={i18n}
//       locale={locale}
//       params={params}
//       payload={payload}
//       permissions={permissions}
//       searchParams={searchParams}
//       user={user || undefined}
//       visibleEntities={visibleEntities}
//     >
//       <Gutter>
//         <Table appearance={"default"} columns={columnState} data={data.docs} />
//       </Gutter>
//     </DefaultTemplate>
//   );
// };
import type { PayloadServerReactComponent, SanitizedConfig } from "payload";

import React from "react";
import { Table } from "../Table/index.js";

export const TreeListView: React.FC<PayloadServerReactComponent<SanitizedConfig>> = ({
  data,
  columnState,
}) => {
  console.log({ data, columnState });
  return <Table appearance={"default"} columns={columnState} data={data} />;
};

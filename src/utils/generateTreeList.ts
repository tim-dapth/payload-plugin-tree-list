import { PaginatedDocs } from "payload";

export function generateTreeList(docs?: PaginatedDocs["docs"]) {
  if (!docs || !docs.length) return [];
  const docsById = docs.reduce((acc, doc) => {
    acc[doc.id] = { ...doc, children: [] };
    return acc;
  }, {});

  const childIds = new Set();
  const rootDocs = [];

  docs.forEach(doc => {
    if (doc.parent === null) {
      rootDocs.push(docsById[doc.id]);
    } else {
      docsById[doc.parent].children.push(docsById[doc.id]);
      childIds.add(doc.id);
    }
  });

  return rootDocs.filter(doc => !childIds.has(doc.id));
}

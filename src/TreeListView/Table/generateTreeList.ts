export function generateTreeList(docs) {
  if (!docs || !docs.length) {
    return [];
  }
  const docsById = docs.reduce((acc, doc, index) => {
    acc[doc.id] = { ...doc, children: [], originalIndex: index };
    return acc;
  }, {});

  const childIds = new Set();
  const rootDocs: any = [];

  docs.forEach(doc => {
    if (doc.parent === null || !docsById[doc.parent]) {
      rootDocs.push(docsById[doc.id]);
    } else {
      docsById[doc.parent].children.push(docsById[doc.id]);
      childIds.add(doc.id);
    }
  });

  return rootDocs.filter(doc => !childIds.has(doc.id));
}

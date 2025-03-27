import type { Plugin } from "payload";

type TreeListPluginConfig = {
  collections: string[];
  enabled?: boolean;
};

export const treeListPlugin =
  ({ collections, enabled = true }: TreeListPluginConfig): Plugin =>
  incomingConfig => {
    if (!enabled) return incomingConfig;
    let config = { ...incomingConfig };
    config.collections = (config?.collections || []).map(collection => {
      if (!collections.includes(collection.slug)) return collection;
      const adminConfig = collection?.admin || {};
      const components = adminConfig.components || {};
      const views = components.views || {};
      const list = views.list || {};

      return {
        ...collection,
        admin: {
          ...adminConfig,
          components: {
            ...components,
            views: {
              ...views,
              list: {
                ...list,
                Component: "dapth-payload-plugin-tree-list/server#TreeListView",
              },
            },
          },
        },
      };
    });
    return config;
  };

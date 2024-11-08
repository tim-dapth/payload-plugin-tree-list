import type { Plugin } from "payload";
import { TreeListPluginConfig } from "./types.js";

export const treeListPlugin =
  ({ collections }: TreeListPluginConfig): Plugin =>
  incomingConfig => {
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
                Component: "payload-plugin-tree-list/client#TreeList",
              },
            },
          },
        },
      };
    });
    return config;
  };

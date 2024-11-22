import type { I18n } from "@payloadcms/translations";
import type {
  AdminViewProps,
  Locale,
  Payload,
  Permissions,
  SanitizedCollectionConfig,
  User,
} from "payload";

export type TreeListPluginConfig = {
  /**
   * The slugs of the collections this plugin should extend.
   */
  collections: string[];
  debug?: boolean;
  enabled?: boolean;
};

export type ListComponentClientProps = {
  collectionSlug: SanitizedCollectionConfig["slug"];
  hasCreatePermission: boolean;
  newDocumentURL: string;
};

export type ListComponentServerProps = {
  collectionConfig: SanitizedCollectionConfig;
  i18n: I18n;
  limit: number;
  locale: Locale;
  params: AdminViewProps["params"];
  payload: Payload;
  permissions: Permissions;
  searchParams: AdminViewProps["searchParams"];
  user: User;
};

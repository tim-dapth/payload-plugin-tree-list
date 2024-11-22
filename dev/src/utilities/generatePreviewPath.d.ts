import { CollectionSlug } from 'payload';
declare const collectionPrefixMap: Partial<Record<CollectionSlug, string>>;
type Props = {
    collection: keyof typeof collectionPrefixMap;
    slug: string;
};
export declare const generatePreviewPath: ({ collection, slug }: Props) => string;
export {};
//# sourceMappingURL=generatePreviewPath.d.ts.map
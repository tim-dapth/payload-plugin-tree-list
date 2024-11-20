import type { Config } from 'src/payload-types';
type Collection = keyof Config['collections'];
/**
 * Returns a unstable_cache function mapped with the cache tag for the slug
 */
export declare const getCachedDocument: (collection: Collection, slug: string) => any;
export {};
//# sourceMappingURL=getDocument.d.ts.map
import type { Config } from 'src/payload-types';
type Global = keyof Config['globals'];
/**
 * Returns a unstable_cache function mapped with the cache tag for the slug
 */
export declare const getCachedGlobal: (slug: Global, depth?: number) => any;
export {};
//# sourceMappingURL=getGlobals.d.ts.map
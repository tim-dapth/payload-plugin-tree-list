export declare function getRedirects(depth?: number): Promise<import("../payload-types.js").Redirect[]>;
/**
 * Returns a unstable_cache function mapped with the cache tag for 'redirects'.
 *
 * Cache all redirects together to avoid multiple fetches.
 */
export declare const getCachedRedirects: () => any;
//# sourceMappingURL=getRedirects.d.ts.map
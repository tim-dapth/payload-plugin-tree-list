import React from 'react';
import type { Page } from '@/payload-types';
type LowImpactHeroType = {
    children?: React.ReactNode;
    richText?: never;
} | (Omit<Page['hero'], 'richText'> & {
    children?: never;
    richText?: Page['hero']['richText'];
});
export declare const LowImpactHero: React.FC<LowImpactHeroType>;
export {};
//# sourceMappingURL=index.d.ts.map
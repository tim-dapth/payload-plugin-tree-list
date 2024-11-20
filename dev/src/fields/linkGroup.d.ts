import type { ArrayField, Field } from 'payload';
import type { LinkAppearances } from './link';
type LinkGroupType = (options?: {
    appearances?: LinkAppearances[] | false;
    overrides?: Partial<ArrayField>;
}) => Field;
export declare const linkGroup: LinkGroupType;
export {};
//# sourceMappingURL=linkGroup.d.ts.map
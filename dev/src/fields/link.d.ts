import type { Field } from 'payload';
export type LinkAppearances = 'default' | 'outline';
export declare const appearanceOptions: Record<LinkAppearances, {
    label: string;
    value: string;
}>;
type LinkType = (options?: {
    appearances?: LinkAppearances[] | false;
    disableLabel?: boolean;
    overrides?: Record<string, unknown>;
}) => Field;
export declare const link: LinkType;
export {};
//# sourceMappingURL=link.d.ts.map
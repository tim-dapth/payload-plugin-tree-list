import type { CheckboxField, TextField } from 'payload';
type Overrides = {
    slugOverrides?: Partial<TextField>;
    checkboxOverrides?: Partial<CheckboxField>;
};
type Slug = (fieldToUse?: string, overrides?: Overrides) => [TextField, CheckboxField];
export declare const slugField: Slug;
export {};
//# sourceMappingURL=index.d.ts.map
import type { Form as FormType } from '@payloadcms/plugin-form-builder/types';
import React from 'react';
export type Value = unknown;
export interface Property {
    [key: string]: Value;
}
export interface Data {
    [key: string]: Property | Property[];
}
export type FormBlockType = {
    blockName?: string;
    blockType?: 'formBlock';
    enableIntro: boolean;
    form: FormType;
    introContent?: {
        [k: string]: unknown;
    }[];
};
export declare const FormBlock: React.FC<{
    id?: string;
} & FormBlockType>;
//# sourceMappingURL=Component.d.ts.map
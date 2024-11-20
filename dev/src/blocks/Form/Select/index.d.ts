import type { SelectField } from '@payloadcms/plugin-form-builder/types';
import type { Control, FieldErrorsImpl, FieldValues } from 'react-hook-form';
import React from 'react';
export declare const Select: React.FC<SelectField & {
    control: Control<FieldValues, any>;
    errors: Partial<FieldErrorsImpl<{
        [x: string]: any;
    }>>;
}>;
//# sourceMappingURL=index.d.ts.map
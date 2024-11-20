import type { CheckboxField } from '@payloadcms/plugin-form-builder/types';
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';
import React from 'react';
export declare const Checkbox: React.FC<CheckboxField & {
    errors: Partial<FieldErrorsImpl<{
        [x: string]: any;
    }>>;
    getValues: any;
    register: UseFormRegister<FieldValues>;
    setValue: any;
}>;
//# sourceMappingURL=index.d.ts.map
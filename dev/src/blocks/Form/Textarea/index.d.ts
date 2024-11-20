import type { TextField } from '@payloadcms/plugin-form-builder/types';
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';
import React from 'react';
export declare const Textarea: React.FC<TextField & {
    errors: Partial<FieldErrorsImpl<{
        [x: string]: any;
    }>>;
    register: UseFormRegister<FieldValues>;
    rows?: number;
}>;
//# sourceMappingURL=index.d.ts.map
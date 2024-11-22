import type { EmailField } from '@payloadcms/plugin-form-builder/types';
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';
import React from 'react';
export declare const Email: React.FC<EmailField & {
    errors: Partial<FieldErrorsImpl<{
        [x: string]: any;
    }>>;
    register: UseFormRegister<FieldValues>;
}>;
//# sourceMappingURL=index.d.ts.map
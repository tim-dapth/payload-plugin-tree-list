import React from 'react';
export type CodeBlockProps = {
    code: string;
    language?: string;
    blockType: 'code';
};
type Props = CodeBlockProps & {
    className?: string;
};
export declare const CodeBlock: React.FC<Props>;
export {};
//# sourceMappingURL=Component.d.ts.map
import type { Metadata } from 'next/types';
type Args = {
    searchParams: Promise<{
        q: string;
    }>;
};
export default function Page({ searchParams: searchParamsPromise }: Args): Promise<import("react/jsx-runtime").JSX.Element>;
export declare function generateMetadata(): Metadata;
export {};
//# sourceMappingURL=page.d.ts.map
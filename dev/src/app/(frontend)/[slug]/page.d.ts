import type { Metadata } from 'next';
export declare function generateStaticParams(): Promise<{
    slug: string;
}[]>;
type Args = {
    params: Promise<{
        slug?: string;
    }>;
};
export default function Page({ params: paramsPromise }: Args): Promise<import("react/jsx-runtime").JSX.Element>;
export declare function generateMetadata({ params: paramsPromise }: {
    params: any;
}): Promise<Metadata>;
export {};
//# sourceMappingURL=page.d.ts.map
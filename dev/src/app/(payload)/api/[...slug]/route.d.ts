import '@payloadcms/next/css';
export declare const GET: (request: Request, { params: paramsPromise }: {
    params: Promise<{
        slug: string[];
    }>;
}) => Promise<Response>;
export declare const POST: (request: Request, { params: paramsPromise }: {
    params: Promise<{
        slug: string[];
    }>;
}) => Promise<Response>;
export declare const DELETE: (request: Request, { params: paramsPromise }: {
    params: Promise<{
        slug: string[];
    }>;
}) => Promise<Response>;
export declare const PATCH: (request: Request, { params: paramsPromise }: {
    params: Promise<{
        slug: string[];
    }>;
}) => Promise<Response>;
export declare const PUT: (request: Request, { params: paramsPromise }: {
    params: Promise<{
        slug: string[];
    }>;
}) => Promise<Response>;
export declare const OPTIONS: (request: Request) => Promise<Response>;
//# sourceMappingURL=route.d.ts.map
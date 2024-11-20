import type { AccessArgs } from 'payload';
import type { User } from '@/payload-types';
type isAuthenticated = (args: AccessArgs<User>) => boolean;
export declare const authenticated: isAuthenticated;
export {};
//# sourceMappingURL=authenticated.d.ts.map
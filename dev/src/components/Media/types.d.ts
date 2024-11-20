import type { StaticImageData } from 'next/image';
import type { ElementType, Ref } from 'react';
import type { Media as MediaType } from '@/payload-types';
export interface Props {
    alt?: string;
    className?: string;
    fill?: boolean;
    htmlElement?: ElementType | null;
    imgClassName?: string;
    onClick?: () => void;
    onLoad?: () => void;
    priority?: boolean;
    ref?: Ref<HTMLImageElement | HTMLVideoElement | null>;
    resource?: MediaType | string | number;
    size?: string;
    src?: StaticImageData;
    videoClassName?: string;
}
//# sourceMappingURL=types.d.ts.map
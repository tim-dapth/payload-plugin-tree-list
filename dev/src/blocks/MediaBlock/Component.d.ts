import type { StaticImageData } from 'next/image';
import React from 'react';
import type { MediaBlock as MediaBlockProps } from '@/payload-types';
type Props = MediaBlockProps & {
    breakout?: boolean;
    captionClassName?: string;
    className?: string;
    enableGutter?: boolean;
    imgClassName?: string;
    staticImage?: StaticImageData;
    disableInnerContainer?: boolean;
};
export declare const MediaBlock: React.FC<Props>;
export {};
//# sourceMappingURL=Component.d.ts.map
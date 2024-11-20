import { CodeBlockProps } from '@/blocks/Code/Component';
import { JSX } from 'react';
import { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical';
import type { BannerBlock as BannerBlockProps } from '@/payload-types';
import type { CallToActionBlock as CTABlockProps, MediaBlock as MediaBlockProps } from '@/payload-types';
export type NodeTypes = DefaultNodeTypes | SerializedBlockNode<CTABlockProps | MediaBlockProps | BannerBlockProps | CodeBlockProps>;
type Props = {
    nodes: NodeTypes[];
};
export declare function serializeLexical({ nodes }: Props): JSX.Element;
export {};
//# sourceMappingURL=serialize.d.ts.map
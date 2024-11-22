export const importMap: {
    "@payloadcms/richtext-lexical/rsc#RscEntryLexicalCell": import("react").FC<{
        admin: import("dev/node_modules/@payloadcms/richtext-lexical/dist/types.js").LexicalFieldAdminProps;
        i18n: import(".pnpm/@payloadcms+translations@3.0.1/node_modules/@payloadcms/translations").I18nClient;
        payload: import("payload").Payload;
        sanitizedEditorConfig: import("@payloadcms/richtext-lexical").SanitizedServerEditorConfig;
    } & import("dev/node_modules/@payloadcms/richtext-lexical/dist/types.js").LexicalRichTextCellProps>;
    "@payloadcms/richtext-lexical/rsc#RscEntryLexicalField": import("react").FC<{
        admin: import("dev/node_modules/@payloadcms/richtext-lexical/dist/types.js").LexicalFieldAdminProps;
        sanitizedEditorConfig: import("@payloadcms/richtext-lexical").SanitizedServerEditorConfig;
    } & import("payload").ClientComponentProps & Pick<import("payload").FieldPaths, "path"> & import("payload").ServerComponentProps>;
    "@payloadcms/richtext-lexical/client#InlineToolbarFeatureClient": import("@payloadcms/richtext-lexical").FeatureProviderProviderClient<undefined, undefined>;
    "@payloadcms/richtext-lexical/client#FixedToolbarFeatureClient": import("@payloadcms/richtext-lexical").FeatureProviderProviderClient<import("dev/node_modules/@payloadcms/richtext-lexical/dist/features/toolbars/fixed/server/index.js").FixedToolbarFeatureProps, import("dev/node_modules/@payloadcms/richtext-lexical/dist/features/toolbars/fixed/server/index.js").FixedToolbarFeatureProps>;
    "@payloadcms/richtext-lexical/client#HeadingFeatureClient": import("@payloadcms/richtext-lexical").FeatureProviderProviderClient<import("@payloadcms/richtext-lexical").HeadingFeatureProps, import("@payloadcms/richtext-lexical").HeadingFeatureProps>;
    "@payloadcms/richtext-lexical/client#ParagraphFeatureClient": import("@payloadcms/richtext-lexical").FeatureProviderProviderClient<undefined, undefined>;
    "@payloadcms/richtext-lexical/client#UnderlineFeatureClient": import("@payloadcms/richtext-lexical").FeatureProviderProviderClient<undefined, undefined>;
    "@payloadcms/richtext-lexical/client#BoldFeatureClient": import("@payloadcms/richtext-lexical").FeatureProviderProviderClient<undefined, undefined>;
    "@payloadcms/richtext-lexical/client#ItalicFeatureClient": import("@payloadcms/richtext-lexical").FeatureProviderProviderClient<undefined, undefined>;
    "@payloadcms/richtext-lexical/client#LinkFeatureClient": import("@payloadcms/richtext-lexical").FeatureProviderProviderClient<undefined, import("dev/node_modules/@payloadcms/richtext-lexical/dist/features/link/server/index.js").ExclusiveLinkCollectionsProps>;
    "@payloadcms/plugin-seo/client#OverviewComponent": import("react").FC<{
        descriptionOverrides?: {
            maxLength?: number;
            minLength?: number;
        };
        descriptionPath?: string;
        imagePath?: string;
        titleOverrides?: {
            maxLength?: number;
            minLength?: number;
        };
        titlePath?: string;
    } & import("payload").UIField>;
    "@payloadcms/plugin-seo/client#MetaTitleComponent": import("react").FC<{
        readonly hasGenerateTitleFn: boolean;
    } & {
        readonly field: Omit<import("payload").TextFieldClient, "type"> & Partial<Pick<import("payload").TextFieldClient, "type">>;
    } & Omit<import("payload").ClientComponentProps, "customComponents" | "field"> & {
        readonly inputRef?: React.RefObject<HTMLInputElement>;
        readonly onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
        readonly path: string;
        readonly validate?: import("payload").TextFieldValidation;
    }>;
    "@payloadcms/plugin-seo/client#MetaImageComponent": import("react").FC<{
        readonly hasGenerateImageFn: boolean;
    } & {
        readonly field: Omit<import("node_modules/payload/dist/fields/config/types.js").SingleUploadFieldClient, "type"> & Partial<Pick<import("node_modules/payload/dist/fields/config/types.js").SingleUploadFieldClient, "type">>;
    } & Omit<import("payload").ClientComponentProps, "customComponents" | "field"> & {
        readonly path: string;
        readonly validate?: import("payload").UploadFieldValidation;
    }>;
    "@payloadcms/plugin-seo/client#MetaDescriptionComponent": import("react").FC<{
        readonly hasGenerateDescriptionFn: boolean;
    } & {
        readonly field: Omit<import("payload").TextareaFieldClient, "type"> & Partial<Pick<import("payload").TextareaFieldClient, "type">>;
    } & Omit<import("payload").ClientComponentProps, "customComponents" | "field"> & {
        readonly inputRef?: React.Ref<HTMLInputElement>;
        readonly onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
        readonly path: string;
        readonly validate?: import("payload").TextareaFieldValidation;
    }>;
    "@payloadcms/plugin-seo/client#PreviewComponent": import("react").FC<{
        readonly descriptionPath?: string;
        readonly hasGenerateURLFn: boolean;
        readonly titlePath?: string;
    } & import("payload").UIField>;
    "@/fields/slug/SlugComponent#SlugComponent": any;
    "payload-plugin-tree-list/client#TreeListView": any;
    "@payloadcms/richtext-lexical/client#HorizontalRuleFeatureClient": import("@payloadcms/richtext-lexical").FeatureProviderProviderClient<undefined, undefined>;
    "@payloadcms/richtext-lexical/client#BlocksFeatureClient": import("@payloadcms/richtext-lexical").FeatureProviderProviderClient<undefined, any>;
    "@payloadcms/plugin-search/client#LinkToDoc": import("react").FC<import("payload").UIField>;
    "@/components/BeforeDashboard#default": any;
    "@/components/BeforeLogin#default": any;
};
//# sourceMappingURL=importMap.d.ts.map
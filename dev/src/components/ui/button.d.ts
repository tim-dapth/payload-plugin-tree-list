import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const buttonVariants: (props?: {
    size?: "default" | "clear" | "icon" | "lg" | "sm";
    variant?: "default" | "outline" | "link" | "secondary" | "destructive" | "ghost";
} & import("class-variance-authority/types").ClassProp) => string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button, buttonVariants };
//# sourceMappingURL=button.d.ts.map
import {ReactNode} from "react";

type ButtonProps = {
    children: ReactNode;
    variant?: "primary" | "secondary" | "black";
    size?: "sm" | "md" | "lg";
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
    children,
    variant = "primary",
    size = "md",
    className,
    ...props
}: ButtonProps) {
    const baseClasses = "cursor-pointer text-sm/4 px-3 shadow-md shadow-black/5 font-medium rounded-lg border transition-colors";

    const variantClasses = {
        primary: "text-zinc-800 bg-white border-neutral-200 hover:bg-neutral-50",
        secondary: "text-white bg-indigo-600 border-indigo-700 hover:bg-indigo-700",
        black: "text-white bg-zinc-800 border-zinc-900 hover:bg-zinc-900",
    };

    const sizeClasses = {
        sm: "py-1.5",
        md: "py-2",
        lg: "py-2.5",
    };

    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
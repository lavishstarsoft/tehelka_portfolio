import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-[10px] font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 disabled:opacity-40 disabled:pointer-events-none active:scale-[0.98]",
          {
            "bg-brand-red text-white hover:bg-brand-red-dark hover:-translate-y-[1px] hover:shadow-sm":
              variant === "primary",
            "bg-transparent border-[1.5px] border-ink text-ink hover:bg-ink hover:text-paper hover:-translate-y-[1px]":
              variant === "secondary",
            "bg-transparent text-ink hover:bg-black/5": variant === "ghost",
            "h-11 md:h-12 px-6 text-[15px]": size === "default",
            "h-9 px-4 text-sm": size === "sm",
            "h-14 px-8 text-base": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

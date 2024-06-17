import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export const variants = cva("font-regular md:text-sm text-xs", {
  variants: {
    variant: {
      primary:
        "px-4 py-2 bg-indigo-600 rounded font-medium text-white hover:bg-indigo-500 focus:outline-none transition-all",
      secondary:
        "bg-white bg-indigo-200 font-semibold text-indigo-900 rounded px-4 py-2 text-lg hover:bg-indigo-300 transition-all",
      input:
        "bg-white border border-gray-300 w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-200 rounded font-regular md:text-base text-sm",
      icon: "h-5 w-5",
      iconButton: "",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={twMerge(variants({ variant, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "MyComponent";

export { Button };

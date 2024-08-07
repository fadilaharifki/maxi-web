import * as React from "react";
import { cn } from "@/lib/utils";
import { twMerge } from "tailwind-merge";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isButton?: boolean;
  isError?: boolean;
  errorMessage?: string;
  classNameLabel?: string;
  classNameError?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border  border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-green focus-visible:ring-offset-2  disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

export const InputWithButton = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="flex items-center space-x-2">
        <Input type={type} className={className} ref={ref} {...props} />
        <button
          type="button"
          className="h-10 px-4 py-2 text-sm font-medium text-white bg-primary-green rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-primary-gbg-primary-green focus:ring-offset-2 "
        >
          Subscribe
        </button>
      </div>
    );
  }
);
InputWithButton.displayName = "InputWithButton";

export const InputWithLabel = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      isButton,
      errorMessage,
      isError,
      classNameLabel,
      classNameError,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col space-y-2">
        {label && (
          <label
            className={twMerge(
              "text-sm font-medium text-muted-foreground",
              classNameLabel
            )}
          >
            {label}
          </label>
        )}
        <div className="flex items-center space-x-2">
          <Input type={type} className={className} ref={ref} {...props} />
          {isButton && (
            <button
              type="button"
              className="h-10 px-4 py-2 text-sm font-medium text-white bg-primary-green rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2"
            >
              Subscribe
            </button>
          )}
        </div>
        {isError && (
          <p className={twMerge("text-red-600", classNameError)}>
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);
InputWithLabel.displayName = "InputWithLabel";

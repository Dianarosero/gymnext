import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  suffix?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className = "", suffix, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        <label className="block text-sm font-semibold text-gray-700">
          {label}
        </label>
        <div className="relative">
          <input
            ref={ref}
            className={`w-full px-3 py-2 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all sm:text-sm text-gray-900 ${
              suffix ? "pr-8" : ""
            } ${className}`}
            {...props}
          />
          {suffix && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
              {suffix}
            </span>
          )}
        </div>
      </div>
    );
  },
);

Input.displayName = "Input";
export default Input;

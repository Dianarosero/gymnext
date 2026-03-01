import { forwardRef } from "react";

const Select = forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement> & { label: string; children: React.ReactNode }>(
  ({ label, className = "", children, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        <label className="block text-sm font-semibold text-gray-700">{label}</label>
        <div className="relative">
          <select
            ref={ref}
            className={`w-full px-3 py-2 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all sm:text-sm text-gray-900 ${className}`}
            {...props}
          >
            {children}
          </select>
        </div>
      </div>
    );
  }
);

Select.displayName = "Select";
export default Select;
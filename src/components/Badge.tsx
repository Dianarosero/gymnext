interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "danger" | "warning";
}

export default function Badge({ children, variant = "default" }: BadgeProps) {
  const variantStyles = {
    default: "bg-gray-100 text-gray-700 border border-gray-200",
    success: "bg-green-50 text-green-700 border border-green-200 shadow-sm",
    danger: "bg-red-50 text-red-700 border border-red-200 shadow-sm",
    warning: "bg-orange-50 text-orange-700 border border-orange-200 shadow-sm",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold transition-colors duration-150 ${variantStyles[variant]}`}
    >
      {children}
    </span>
  );
}

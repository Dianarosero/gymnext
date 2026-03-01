interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const styleVariants = {
    primary:
      "bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500 shadow-sm shadow-purple-200 transform hover:scale-[1.02]",
    outline:
      "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300 focus:ring-gray-200 shadow-sm",
    ghost:
      "bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-200",
  };

  return (
    <button
      className={`${baseClasses} ${styleVariants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

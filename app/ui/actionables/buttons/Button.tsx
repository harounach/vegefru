interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  variant?: "danger" | "neutral";
  disabled?: boolean;
  className?: string;
}

export default function Button({
  label,
  type,
  variant,
  className,
  disabled,
}: ButtonProps) {
  const buttonType = type ? type : "button";
  let buttonVariant = "";
  switch (variant) {
    case "danger":
      buttonVariant = "bg-rose-500 text-white hover:bg-rose-400";
      break;
    case "neutral":
      buttonVariant = "bg-gray-200 text-slate-950 hover:bg-gray-300";
      break;

    default:
      buttonVariant = "bg-indigo-500 text-white hover:bg-indigo-400";
      break;
  }

  return (
    <button
      type={buttonType}
      className={`rounded  px-2 py-2  shadow-lg transition  hover:shadow-xl ${buttonVariant} ${className}`}
      aria-disabled={disabled}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

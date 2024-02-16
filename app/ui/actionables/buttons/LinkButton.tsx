import Link from "next/link";

interface LinkButtonProps {
  label: string;
  url: string;
  variant?: "danger" | "neutral";
  className?: string;
}

export default function LinkButton({
  label,
  url,
  variant,
  className,
}: LinkButtonProps) {
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
    <Link
      href={url}
      className={`rounded  px-2 py-2  shadow-lg transition  hover:shadow-xl ${buttonVariant} ${className}`}
    >
      {label}
    </Link>
  );
}

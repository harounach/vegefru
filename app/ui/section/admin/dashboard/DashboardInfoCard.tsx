interface DashboardInfoCardProps {
  label: string;
  value: string;
  color: "blue" | "green" | "orange";
  className?: string;
  children: React.ReactNode;
}

export default function DashboardInfoCard({
  label,
  color,
  value,
  className,
  children,
}: DashboardInfoCardProps) {
  let iconClasses = "";
  switch (color) {
    case "blue":
      iconClasses = "bg-blue-100 text-blue-700";
      break;

    case "green":
      iconClasses = "bg-green-100 text-green-700";
      break;

    case "orange":
      iconClasses = "bg-orange-100 text-orange-700";
      break;

    default:
      iconClasses = "bg-blue-100 text-blue-700";
      break;
  }

  return (
    <div className={`flex shrink-0 gap-4 rounded bg-white p-4 ${className}`}>
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-full text-2xl ${iconClasses}`}
      >
        {children}
      </div>
      <div className="flex flex-col justify-between">
        <span className="text-base font-medium text-slate-500">{label}</span>
        <span className="text-xl font-medium text-slate-700">{value}</span>
      </div>
    </div>
  );
}

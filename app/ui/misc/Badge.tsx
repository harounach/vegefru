import classNames from "classnames";

interface BadgeProps {
  label: string;
  color: "green" | "red";
}

export default function Badge({ label, color }: BadgeProps) {
  const classes = classNames(
    "px-3 py-1 rounded-full",
    { "bg-green-100 text-green-700": color === "green" },
    { "bg-rose-100 text-rose-700": color === "red" },
  );

  return <span className={classes}>{label}</span>;
}

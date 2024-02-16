"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

interface SidebarItemProps {
  label: string;
  url: string;
  className?: string;
  children: React.ReactNode;
}

export default function SidebarItem({
  label,
  url,
  className,
  children,
}: SidebarItemProps) {
  const pathname = usePathname();

  const classes = classNames(
    "flex items-center gap-4 px-4 py-2",
    { "bg-slate-50 text-slate-900": url === pathname },
    className,
  );

  return (
    <Link className={classes} href={url}>
      {children} <span>{label}</span>
    </Link>
  );
}

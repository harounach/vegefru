import { signOut } from "@/auth";

import classNames from "classnames";

interface SidebarLogoutItemProps {
  label: string;
  className?: string;
  children: React.ReactNode;
}

export default function SidebarLogoutItem({
  label,
  className,
  children,
}: SidebarLogoutItemProps) {
  const classes = classNames("sidebar__logout", className);

  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
      className={classes}
    >
      <button className="flex items-center gap-4 px-4 py-2">
        {children} <span>{label}</span>
      </button>
    </form>
  );
}

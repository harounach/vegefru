import classNames from "classnames";

interface MenuButtonProps {
  open?: boolean;
  onOpen: () => void;
  className?: string;
}

export default function MenuButton({
  open,
  onOpen,
  className,
}: MenuButtonProps) {
  const classes = classNames(
    "group flex h-10 w-10 flex-col justify-between bg-transparent p-2",
    { "is-open": open },
    className,
  );
  return (
    <button
      className={classes}
      aria-label="Menu button"
      onClick={() => onOpen()}
    >
      <span className="h-1 w-full rounded-sm bg-slate-950 transition group-[.is-open]:translate-y-2.5 group-[.is-open]:rotate-45"></span>
      <span className="h-1 w-full rounded-sm bg-slate-950 transition group-[.is-open]:opacity-0"></span>
      <span className="h-1 w-full rounded-sm bg-slate-950 transition group-[.is-open]:-translate-y-2.5 group-[.is-open]:-rotate-45"></span>
    </button>
  );
}

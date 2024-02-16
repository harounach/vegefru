"use client";

interface IconButtonProps {
  title?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

export default function IconButton({
  title,
  onClick,
  className,
  children,
}: IconButtonProps) {
  const titleText = title ? title : "";

  return (
    <button
      className={`flex h-10 w-10 items-center justify-center rounded-full text-lg ${className}`}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      title={titleText}
    >
      {children}
    </button>
  );
}

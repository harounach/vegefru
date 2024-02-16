import Link from "next/link";

interface IconLinkButtonProps {
  title?: string;
  url: string;
  className?: string;
  children: React.ReactNode;
}

export default function IconLinkButton({
  title,
  url,
  className,
  children,
}: IconLinkButtonProps) {
  const titleText = title ? title : "";

  return (
    <Link
      className={`flex h-10 w-10 items-center justify-center rounded-full text-lg ${className}`}
      href={url}
      title={titleText}
    >
      {children}
    </Link>
  );
}

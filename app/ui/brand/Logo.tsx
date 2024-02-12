import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  custom?: string;
}

export default function Logo({ custom }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-4`}>
      <Image
        src="/images/logo.svg"
        width={56}
        height={56}
        alt="Sunny Coffee Shop"
      />

      <span className="text-2xl text-indigo-500">VegeFru</span>
    </Link>
  );
}

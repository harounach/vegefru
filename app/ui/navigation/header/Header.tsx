import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="relative flex items-center justify-center py-2">
      <div className="container px-4 sm:px-0">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className={`flex items-center gap-4`}>
              <Image
                src="/images/logo.svg"
                width={56}
                height={56}
                alt="Sunny Coffee Shop"
                className="h-12 w-12 md:h-14 md:w-14"
              />

              <span className="hidden text-2xl font-medium text-neutral-900 md:inline-block">
                VegeFru
              </span>
            </Link>
          </div>
          <a href="#content" className="sr-only focus:not-sr-only">
            Skip to content
          </a>

          {/* Navigation */}
          <Navigation />
        </div>
      </div>
    </header>
  );
}

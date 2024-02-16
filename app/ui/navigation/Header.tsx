import Link from "next/link";
import LinkButton from "@/app/ui/actionables/buttons/LinkButton";
import Image from "next/image";
import Searchbar from "../inputs/Searchbar";

export default function Header() {
  return (
    <header className="relative flex items-center justify-center py-2">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="shrink-0">
            <Link href="/" className={`flex items-center gap-4`}>
              <Image
                src="/images/logo.svg"
                width={56}
                height={56}
                alt="Sunny Coffee Shop"
                className="h-12 w-12 md:h-14 md:w-14"
              />

              <span className="hidden text-2xl text-neutral-900 md:inline-block">
                VegeFru
              </span>
            </Link>
          </div>
          <div className="ml-auto mr-6 max-w-xs">
            <Searchbar />
          </div>
          <div className="absolute sm:static">
            <nav>
              <ul className="flex flex-col items-center gap-4 sm:flex-row">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/products">Shop</Link>
                </li>
                <li>
                  <Link href="/cart">Cart</Link>
                </li>
                <li>
                  <LinkButton label="Login" url="/login" />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

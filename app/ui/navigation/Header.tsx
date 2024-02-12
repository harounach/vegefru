import Link from "next/link";
import Button from "@/app/ui/actionables/buttons/Button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-center py-2">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className={`flex items-center gap-4`}>
              <Image
                src="/images/logo.svg"
                width={56}
                height={56}
                alt="Sunny Coffee Shop"
              />

              <span className="text-2xl text-neutral-900">VegeFru</span>
            </Link>
          </div>
          <div>
            <nav>
              <ul className="flex items-center gap-4">
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
                  <Button label="Login" />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

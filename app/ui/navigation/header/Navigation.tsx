"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Searchbar from "@/app/ui/inputs/Searchbar";
import LinkButton from "@/app/ui/actionables/buttons/LinkButton";
import MenuButton from "./MenuButton";
import classNames from "classnames";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const classes = classNames(
    "fixed left-0 top-0 z-50 h-screen w-screen -translate-y-full  overflow-y-scroll bg-white px-4 pb-4 pt-14 transition sm:static sm:z-0 sm:h-auto sm:w-auto sm:overflow-y-hidden sm:bg-transparent sm:p-0 sm:translate-y-0",
    { "translate-y-0": open },
  );

  const handleOpenMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (pathname) {
      setOpen(false);
    }
  }, [pathname]);

  return (
    <>
      {/* Navigation */}
      <div className={classes}>
        <nav>
          <ul className="flex flex-col items-center gap-4 sm:flex-row">
            <li>
              {/* Search */}
              <div className="max-w-xs sm:mr-6">
                <Searchbar />
              </div>
            </li>
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
      {/* Menu button */}
      <div className="absolute right-4 z-50 sm:hidden">
        <MenuButton open={open} onOpen={handleOpenMenu} />
      </div>
    </>
  );
}

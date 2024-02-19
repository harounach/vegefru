"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import classNames from "classnames";
import Searchbar from "@/app/ui/inputs/Searchbar";
import LinkButton from "@/app/ui/actionables/buttons/LinkButton";
import MenuButton from "./MenuButton";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import CartButton from "../../actionables/buttons/CartButton";

interface NavigationProps {
  isLoggedIn: boolean;
  isAdmin: boolean;
}

export default function Navigation({ isLoggedIn, isAdmin }: NavigationProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const classes = classNames(
    "ml-auto fixed left-0 top-0 z-50 h-screen w-screen -translate-y-full  overflow-y-scroll bg-white px-4 pb-4 pt-14 transition md:static md:z-0 md:h-auto md:w-auto md:overflow-y-hidden md:bg-transparent md:p-0 md:translate-y-0",
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
        <nav className="divide-y md:divide-y-0">
          <ul className="flex flex-col items-center gap-4 py-4 md:flex-row md:py-0">
            <li>
              {/* Search */}
              <div className="max-w-xs md:mr-6">
                <Searchbar />
              </div>
            </li>
            <li>
              <NavLink url="/" label="Home" />
            </li>
            <li>
              <NavLink url="/products" label="Shop" />
            </li>
            <li>
              <CartButton />
            </li>
            <li>
              <AuthButton isLoggedIn={isLoggedIn} />
            </li>
          </ul>

          {/* Account links: mobile only */}
          {isLoggedIn && <AccountLinks />}

          {/* Admin links: mobile only */}
          {isLoggedIn && isAdmin && <AdminLinks />}

          {/* Logout button */}
          {isLoggedIn && (
            <div className="md:hidden">
              <LogoutButton />
            </div>
          )}
        </nav>
      </div>
      {/* Menu button */}
      <div className="absolute right-4 z-50 md:hidden">
        <MenuButton open={open} onOpen={handleOpenMenu} />
      </div>
    </>
  );
}

function AuthButton({ isLoggedIn }: { isLoggedIn: boolean }) {
  if (isLoggedIn) return <LinkButton url="/account" label="Account" />;

  return <LoginButton />;
}

function AccountLinks() {
  return (
    <ul className="flex flex-col items-center gap-4 py-4 md:hidden md:py-4">
      <li>
        <span className="text-lg font-medium text-indigo-900">Account</span>
      </li>
      <li>
        {/* <Link href="/account">Profile</Link> */}
        <NavLink url="/account" label="Profile" />
      </li>
      <li>
        {/* <Link href="/account/orders">Order History</Link> */}
        <NavLink url="/account/orders" label="Order History" />
      </li>
      <li>
        {/* <Link href="/account/favorite">Favorite</Link> */}
        <NavLink url="/account/favorite" label="Favorites" />
      </li>
    </ul>
  );
}

function AdminLinks() {
  return (
    <ul className="flex flex-col items-center gap-4 py-4 md:hidden md:py-4">
      <li>
        <span className="text-lg font-medium text-indigo-900">Admin</span>
      </li>
      <li>
        {/* <Link href="/admin">Dashboard</Link> */}
        <NavLink url="/admin" label="Dashboard" />
      </li>
      <li>
        {/* <Link href="/admin/products">Products</Link> */}
        <NavLink url="/admin/products" label="Products" />
      </li>
      <li>
        {/* <Link href="/admin/orders">Orders</Link> */}
        <NavLink url="/admin/orders" label="Orders" />
      </li>
      <li>
        {/* <Link href="/admin/users">Users</Link> */}
        <NavLink url="/admin/users" label="Users" />
      </li>
    </ul>
  );
}

function NavLink({ url, label }: { url: string; label: string }) {
  const pathname = usePathname();
  const classes = classNames({ "text-indigo-500": pathname === url });

  return (
    <Link className={classes} href={url}>
      {label}
    </Link>
  );
}

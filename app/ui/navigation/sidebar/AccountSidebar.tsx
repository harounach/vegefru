import {
  BsBasket2Fill,
  BsBoxArrowRight,
  BsHeartFill,
  BsPersonCircle,
} from "react-icons/bs";
import SidebarItem from "./SidebarItem";
import SidebarLogoutItem from "./SidebarLogoutItem";

export default function AccountSidebar() {
  return (
    <aside className="hidden min-w-52 bg-zinc-900 text-white md:block">
      <nav className="pt-8">
        <ul className="flex flex-col gap-1">
          {/* Profile */}
          <li>
            <SidebarItem label="Profile" url="/account">
              <BsPersonCircle />
            </SidebarItem>
          </li>

          {/* Orders */}
          <li>
            <SidebarItem label="Order history" url="/account/orders">
              <BsBasket2Fill />
            </SidebarItem>
          </li>

          {/* Favorites */}
          <li>
            <SidebarItem label="Favorites" url="/account/favorite">
              <BsHeartFill />
            </SidebarItem>
          </li>

          {/* Logout */}
          <li>
            <SidebarLogoutItem label="Logout">
              <BsBoxArrowRight />
            </SidebarLogoutItem>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

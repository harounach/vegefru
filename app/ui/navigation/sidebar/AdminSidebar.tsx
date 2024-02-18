import {
  BsBasket2Fill,
  BsBoxArrowRight,
  BsTagsFill,
  BsGrid1X2Fill,
  BsPeopleFill,
} from "react-icons/bs";
import SidebarItem from "./SidebarItem";

export default function AdminSidebar() {
  return (
    <aside className="hidden min-w-52 bg-zinc-900 text-white md:block">
      <nav className="pt-8">
        <ul className="flex flex-col gap-1">
          {/* Dashboard */}
          <li>
            <SidebarItem label="Dashboard" url="/admin">
              <BsGrid1X2Fill />
            </SidebarItem>
          </li>

          {/* Products */}
          <li>
            <SidebarItem label="Products" url="/admin/products">
              <BsTagsFill />
            </SidebarItem>
          </li>

          {/* Orders */}
          <li>
            <SidebarItem label="Orders" url="/admin/orders">
              <BsBasket2Fill />
            </SidebarItem>
          </li>

          {/* Users */}
          <li>
            <SidebarItem label="Users" url="/admin/users">
              <BsPeopleFill />
            </SidebarItem>
          </li>
          <li>
            <button className="flex items-center gap-4 px-4 py-2">
              <BsBoxArrowRight /> <span>Logout</span>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

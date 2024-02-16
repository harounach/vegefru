import UserCard from "./UserCard";

import {
  fetchFilteredUsers,
  fetchUsersPages,
} from "@/app/lib/database/user/user.query";
import Pagination from "@/app/ui/actionables/Pagination";

interface UsersListProps {
  query: string;
  currentPage: number;
  className?: string;
}

export default async function UsersList({
  query,
  currentPage,
  className,
}: UsersListProps) {
  const users = await fetchFilteredUsers(query, currentPage);
  const totalPages = await fetchUsersPages(query);

  return (
    <>
      <div
        className={`flex flex-col gap-4 divide-y overflow-hidden rounded bg-white p-4 ${className}`}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-sans text-xl font-medium text-slate-900">
            Users
          </h3>
        </div>

        <div className="flex flex-col divide-y">
          {users.map((user) => {
            return <UserCard key={user._id.toString()} user={user} />;
          })}
        </div>
      </div>
      <div className="mt-4">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}

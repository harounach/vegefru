import DeleteUserButton from "./DeleteUserButton";
import { User } from "@/app/lib/definitions";
import { formatFriendyDate } from "@/app/lib/utils/dateUtils";

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="flex flex-col gap-4 border-b border-b-gray-50 px-0 py-4">
      <div className="flex items-center justify-between">
        <span className="text-base font-medium text-indigo-600">{user.name}</span>
        <span className="text-base text-slate-900">{user.email}</span>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-base text-slate-600">Join at: </span>
        <span className="text-base text-slate-900">
          {formatFriendyDate(user.createdAt.toString())}
        </span>

        {user.role !== "admin" && (
          <div className="ml-auto">
            <DeleteUserButton userId={user._id.toString()} />
          </div>
        )}
      </div>
    </div>
  );
}

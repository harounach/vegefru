import Rating from "@/app/ui/misc/Rating";
import { formatFriendyDate } from "@/app/lib/utils/dateUtils";
import type { Review } from "@/app/lib/definitions";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded bg-white px-6 py-4">
      <h4 className="text-lg font-medium text-slate-900">{review.name}</h4>
      <div>
        <Rating value={review.rating} />
      </div>
      <p className="text-slate-500">{formatFriendyDate(review.createdAt)}</p>
      <p className="text-slate-700">{review.comment}</p>
    </div>
  );
}

import ReviewCard from "./ReviewCard";
import { fetchProductReviews } from "@/app/lib/database/review/review.query";
// import { reviews } from "@/app/lib/placeholder-data";

interface ReviewListProps {
  productId: string;
}

export default async function ReviewList({ productId }: ReviewListProps) {
  const reviews = await fetchProductReviews(productId);

  const reviewsContent = reviews.map((review) => {
    return (
      <li key={review._id.toString()}>
        <ReviewCard review={review} />
      </li>
    );
  });

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-sans text-xl font-medium text-slate-900">Reviews</h2>
      {reviews.length > 0 ? (
        <ul className="flex flex-col gap-4">{reviewsContent}</ul>
      ) : (
        <EmpyReview />
      )}
    </div>
  );
}

function EmpyReview() {
  return (
    <div>
      <p className="text-base">No reviews</p>
    </div>
  );
}

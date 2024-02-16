// import { reviews } from "@/app/lib/placeholder-data";
import DeleteReviewsButton from "./DeleteReviewsButton";
import AdminReview from "./AdminReview";
import { fetchProductReviews } from "@/app/lib/database/review/review.query";

export default async function AdminReviewList({
  productId,
}: {
  productId: string;
}) {
  const reviews = await fetchProductReviews(productId);

  const reviewsContent = reviews.map((review) => {
    return (
      <li key={review._id}>
        <AdminReview review={review} />
      </li>
    );
  });

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-sans text-xl font-medium text-slate-900">Reviews</h2>
      <div>
        <DeleteReviewsButton productId={productId} />
      </div>
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

import LoginAlert from "./LoginAlert";
import ReviewForm from "./ReviewForm";

interface WriteReviewProps {
  name: string;
  email: string;
  productId: string;
}

export default function WriteReview({
  name,
  email,
  productId,
}: WriteReviewProps) {
  const content = email ? (
    <ReviewForm name={name} email={email} productId={productId} />
  ) : (
    <LoginAlert productId={productId} />
  );

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold text-slate-900">Write a Review</h2>
      <div className="rounded bg-white px-6 py-4">{content}</div>
    </div>
  );
}

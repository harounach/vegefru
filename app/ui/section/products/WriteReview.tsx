// import { users } from "@/app/lib/data";
import LoginAlert from "./LoginAlert";
import ReviewForm from "./ReviewForm";
import { auth } from "@/auth";

interface WriteReviewProps {
  productId: string;
}

export default async function WriteReview({ productId }: WriteReviewProps) {
  const session = await auth();
  const name = session?.user?.name ? session?.user?.name : "";
  const email = session?.user?.email ? session?.user?.email : "";
  // const name = users[1].name;
  // const email = users[1].email;
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

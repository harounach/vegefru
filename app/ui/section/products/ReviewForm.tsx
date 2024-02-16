"use client";

import { useFormState } from "react-dom";
import TextArea from "@/app/ui/inputs/TextArea";
import Button from "@/app/ui/actionables/buttons/Button";
import { createReviewAction } from "@/app/lib/actions/review.action";

interface ReviewFormProps {
  name: string;
  email: string;
  productId: string;
}

export default function ReviewForm({
  name,
  email,
  productId,
}: ReviewFormProps) {
  const initialState = { message: "", errors: {} };
  const createReview = createReviewAction.bind(null, name, email, productId);
  const [state, dispatch] = useFormState(createReview, initialState);

  return (
    <form className="flex flex-col gap-4" action={dispatch}>
      <div className="flex flex-col gap-2">
        <label className="text-base font-normal" htmlFor="rating">
          Rating
        </label>
        <select name="rating" id="rating" className="rounded">
          <option value="5">5 - Excellent</option>
          <option value="4">4 - Good</option>
          <option value="3">3 - Not bad</option>
          <option value="2">2 - Not good</option>
          <option value="1">1 - Bad</option>
        </select>
      </div>
      <TextArea
        name="comment"
        id="comment"
        label="Comment"
        placeholder="Comment"
        error={state?.errors?.comment?.join(", ")}
      />
      <Button label="Submit" type="submit" custom="write-review__btn" />
      {state.message && (
        <p className="text-base font-normal text-red-500">{state.message}</p>
      )}
    </form>
  );
}

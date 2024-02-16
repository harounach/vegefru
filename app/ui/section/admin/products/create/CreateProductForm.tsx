"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createProductAction } from "@/app/lib/actions/product.action";
import LinkButton from "@/app/ui/actionables/buttons/LinkButton";
import Button from "@/app/ui/actionables/buttons/Button";
import TextInput from "@/app/ui/inputs/TextInput";
import TextArea from "@/app/ui/inputs/TextArea";

interface CreateProductFormProps {
  className?: string;
}

export default function CreateProductForm({
  className,
}: CreateProductFormProps) {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createProductAction, initialState);

  return (
    <form
      className={`flex flex-col gap-4 px-6 py-4 ${className}`}
      action={dispatch}
    >
      {/* Title */}
      <TextInput
        name="title"
        id="title"
        type="text"
        label="Title"
        placeholder="Title"
        error={state?.errors?.title?.join(", ")}
      />

      {/* Description */}
      <TextArea
        name="desc"
        id="desc"
        label="Description"
        placeholder="Description"
        error={state?.errors?.desc?.join(", ")}
      />

      {/* Price */}
      <TextInput
        name="price"
        id="price"
        type="number"
        label="Price"
        placeholder="Price"
        error={state?.errors?.price?.join(", ")}
      />

      {/* Image */}
      <TextInput
        name="image"
        id="image"
        type="text"
        label="Image"
        placeholder="Image"
        error={state?.errors?.image?.join(", ")}
      />

      {/* Slug */}
      <TextInput
        name="slug"
        id="slug"
        type="text"
        label="Slug"
        placeholder="Slug"
        error={state?.errors?.slug?.join(", ")}
      />

      <div className="flex flex-col gap-2">
        <label className="text-base font-normal" htmlFor="category">
          Category
        </label>
        <select name="category" id="category" className="rounded">
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
        </select>
        {state?.errors?.category && (
          <p className="text-base font-normal text-red-500">
            {state?.errors?.category?.join(", ")}
          </p>
        )}
      </div>

      <div className="flex justify-end gap-4">
        <LinkButton url="/admin/products" label="Cancel" variant="neutral" />
        <PubLishButton />
      </div>
      {state.message && (
        <p className="text-base font-normal text-red-500">{state.message}</p>
      )}
    </form>
  );
}

function PubLishButton() {
  const { pending } = useFormStatus();
  return <Button label="Publish" type="submit" disabled={pending} />;
}

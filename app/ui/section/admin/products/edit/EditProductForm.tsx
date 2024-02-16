"use client";

import { useFormState, useFormStatus } from "react-dom";
import Button from "@/app/ui/actionables/buttons/Button";
import LinkButton from "@/app/ui/actionables/buttons/LinkButton";
import TextInput from "@/app/ui/inputs/TextInput";
import TextArea from "@/app/ui/inputs/TextArea";
import { updateProductAction } from "@/app/lib/actions/product.action";
import { Product } from "@/app/lib/definitions";

interface EditProductFormProps {
  product: Product;
  className?: string;
}

export default function EditProductForm({
  product,
  className,
}: EditProductFormProps) {
  const initialState = { message: "", errors: {} };
  const updateProductWithId = updateProductAction.bind(null, product._id);
  const [state, dispatch] = useFormState(updateProductWithId, initialState);

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
        defaultValue={product.title}
        error={state?.errors?.title?.join(", ")}
      />

      {/* Description */}
      <TextArea
        name="desc"
        id="desc"
        label="Description"
        placeholder="Description"
        defaultValue={product.desc}
        error={state?.errors?.desc?.join(", ")}
      />

      {/* Price */}
      <TextInput
        name="price"
        id="price"
        type="number"
        label="Price"
        placeholder="Price"
        defaultValue={product.price}
        error={state?.errors?.price?.join(", ")}
      />

      {/* Image */}
      <TextInput
        name="image"
        id="image"
        type="text"
        label="Image"
        placeholder="Image"
        defaultValue={product.image}
        error={state?.errors?.image?.join(", ")}
      />

      {/* Slug */}
      <TextInput
        name="slug"
        id="slug"
        type="text"
        label="Slug"
        placeholder="Slug"
        defaultValue={product.slug}
        error={state?.errors?.slug?.join(", ")}
      />

      <div className="flex flex-col gap-2">
        <label className="text-base font-normal" htmlFor="category">
          Category
        </label>
        <select
          name="category"
          id="category"
          defaultValue={product.category}
          className="rounded"
        >
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

"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = (category: string) => {
    console.log(category);
    const params = new URLSearchParams(searchParams);
    if (params.has("page")) {
      params.set("page", "1");
    }
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="inline-flex items-center gap-2">
      <label className="text-lg font-medium" htmlFor="category">
        Filter by
      </label>
      <select
        name="category"
        id="category"
        className="rounded"
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="">All</option>
        <option value="fruits">Fruits</option>
        <option value="vegetables">Vegetables</option>
      </select>
    </div>
  );
}

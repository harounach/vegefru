interface RadioProps {
  name: string;
  label: string;
  value: string;
  id: string;
  className?: string;
}

export default function Radio({
  name,
  label,
  value,
  id,
  className,
}: RadioProps) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
      >
        <div>
          <p className=" text-gray-900">{label}</p>
        </div>

        <input
          type="radio"
          name={name}
          value={value}
          id={id}
          className="size-5 border-gray-300 text-blue-500"
        />
      </label>
    </div>
  );
}

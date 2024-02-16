import classNames from "classnames";

interface TextInputProps {
  name: string;
  label: string;
  type?: "text" | "password" | "email" | "number" | "tel";
  id: string;
  placeholder: string;
  hideLabel?: boolean;
  error?: string;
  defaultValue?: string | number;
  className?: string;
}

export default function TextInput({
  name,
  label,
  type,
  id,
  placeholder,
  hideLabel,
  error,
  defaultValue,
  className,
}: TextInputProps) {
  const labelClasses = classNames("text-base font-normal", {
    hidden: hideLabel,
  });

  const inputType = type ? type : "text";

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className={labelClasses} htmlFor={id}>
        {label}
      </label>
      <input
        className="block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        placeholder={placeholder}
        type={inputType}
        name={name}
        id={id}
        defaultValue={defaultValue ? defaultValue : ""}
      />
      {error && <p className="text-base font-normal text-red-500">{error}</p>}
    </div>
  );
}

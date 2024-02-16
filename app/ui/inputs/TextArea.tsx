import classNames from "classnames";

interface TextAreaProps {
  name: string;
  label: string;
  id: string;
  placeholder: string;
  hideLabel?: boolean;
  error?: string;
  defaultValue?: string;
  className?: string;
}

export default function TextArea({
  name,
  label,
  id,
  placeholder,
  hideLabel,
  error,
  defaultValue,
  className,
}: TextAreaProps) {
  const labelClasses = classNames("text-base font-normal", {
    hidden: hideLabel,
  });

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className={labelClasses} htmlFor={id}>
        {label}
      </label>
      <textarea
        className="block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        name={name}
        id={id}
        cols={30}
        rows={5}
        placeholder={placeholder}
        defaultValue={defaultValue ? defaultValue : ""}
      ></textarea>
      {error && <p className="text-base font-normal text-red-500">{error}</p>}
    </div>
  );
}

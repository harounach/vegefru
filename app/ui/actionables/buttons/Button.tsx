interface ButtonProps {
  label?: string;
}

export default function Button({ label }: ButtonProps) {
  return (
    <button className="rounded bg-indigo-500 px-2 py-2 text-white shadow-lg transition hover:bg-indigo-400 hover:shadow-xl">
      {label}
    </button>
  );
}

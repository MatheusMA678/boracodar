import { Minus, Plus } from "@phosphor-icons/react";

interface QuantityButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  option: "increase" | "decrease";
}

export function QuantityButton({ option, ...props }: QuantityButtonProps) {
  return (
    <button
      className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-purple-500 text-purple-400 disabled:border-neutral-300 disabled:text-neutral-300 disabled:opacity-50"
      {...props}
    >
      {option === "increase" ? <Plus /> : <Minus />}
    </button>
  );
}

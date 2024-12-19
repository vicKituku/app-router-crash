import { cn } from "@/lib/utils";

type ButtonProps = {
  isPrimary?: boolean;
  isDisabled?: boolean;
};

export default function Button({ isPrimary, isDisabled }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded",
        isPrimary ? "bg-blue-500 text-white" : "bg-gray-300 text-black",
        isDisabled && "opacity-50 cursor-not-allowed"
      )}
      disabled={isDisabled}
    >
      Click Me
    </button>
  );
}

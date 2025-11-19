import { cn } from "@/lib/utils";

interface ButtonProps {
  id?: string;
  title: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  containerClass?: string;
}

export const Button = ({
  id,
  title,
  rightIcon,
  leftIcon,
  containerClass,
}: ButtonProps) => {
  return (
    <button
      id={id}
      className={cn(
        "group relative z-10 h-14 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black text-lg font-semibold",
        containerClass
      )}
    >
      {leftIcon}

      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>
      {rightIcon}
    </button>
  );
};

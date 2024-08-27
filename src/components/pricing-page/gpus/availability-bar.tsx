import clsx from "clsx";
import React from "react";

interface AvailabilityBarProps {
  available: number;
  total: number;
  className?: string;
}

const AvailabilityBar: React.FC<AvailabilityBarProps> = ({
  available,
  total,
  className,
}) => {
  const filledDots = Math.round((available / total) * 15);
  const emptyDots = 15 - filledDots;

  return (
    <div className={clsx("my-5 flex flex-col gap-2", className)}>
      <div className="flex items-center justify-between">
        <span className="font-bold text-foreground">{available} Available</span>
        <span>(out of {total})</span>
      </div>
      <div className="flex justify-between">
        {Array.from({ length: filledDots }).map((_, i) => (
          <div
            key={i}
            className="mx-[2px] h-[8px] w-[8px] rounded-full bg-black dark:bg-white"
          />
        ))}
        {Array.from({ length: emptyDots }).map((_, i) => (
          <div
            key={i + filledDots}
            className="mx-[2px] h-[8px] w-[8px] rounded-full bg-[#DADADA] dark:bg-zinc-700"
          />
        ))}
      </div>
    </div>
  );
};

export default AvailabilityBar;

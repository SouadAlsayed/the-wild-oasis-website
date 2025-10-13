"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import { useReservation } from "./ReservationContext";

function ReservationReminder() {
  const { range, resetRange } = useReservation();

  if (!range.from || !range.to) return null;

  return (
    <div
      className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] bg-accent-500 text-primary-900 py-3 px-4 rounded-[50px] shadow-lg shadow-slate-900/40 flex items-center 
      justify-between gap-3 text-[14px] sm:text-[16px] font-medium"
    >
      <p className="flex-1 text-center leading-snug">
        <span className="mr-1">👋</span>
        Don’t forget to reserve your dates <br />
        <span className="font-semibold">
          {format(new Date(range.from), "MMM dd yyyy")}
        </span>{" "}
        to{" "}
        <span className="font-semibold">
          {format(new Date(range.to), "MMM dd yyyy")}
        </span>
      </p>

      <button
        className="shrink-0 rounded-full p-1.5 hover:bg-accent-600 transition-colors"
        onClick={resetRange}
      >
        <XMarkIcon className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
    </div>
  );
}

export default ReservationReminder;

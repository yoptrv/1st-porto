"use client";

import { GitHubCalendar } from "react-github-calendar";

export default function GitHubActivity() {
  return (
    <div className="w-full flex flex-col items-center text-center py-10">
      {/* WRAPPER BIAR RESPONSIVE */}
      <div className="w-full max-w-full overflow-x-auto scrollbar-none">
        <div className="inline-block whitespace-nowrap p-4 rounded-xl bg-black text-white backdrop-blur-lg border border-white/10 shadow-xl mx-auto">
          <GitHubCalendar
            username="yoptrv"
            blockSize={14}
            blockMargin={4}
            colorScheme="dark"
            fontSize={14}
          />
        </div>
      </div>
    </div>
  );
}

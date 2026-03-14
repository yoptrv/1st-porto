"use client";

import { GitHubCalendar } from "react-github-calendar";

export default function GitHubActivity() {
  return (
    <div className="w-full">
      <div className="w-full max-w-full overflow-x-auto scrollbar-none">
        <div className="inline-block whitespace-nowrap p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] mx-auto">
          <GitHubCalendar
            username="yoptrv"
            blockSize={12}
            blockMargin={3}
            colorScheme="dark"
            fontSize={12}
            theme={{
              dark: [
                "rgba(255,255,255,0.04)",
                "#312e81",
                "#4338ca",
                "#6366f1",
                "#818cf8",
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
}

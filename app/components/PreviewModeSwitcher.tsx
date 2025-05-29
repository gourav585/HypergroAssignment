import React from "react";

export type PreviewMode = "desktop" | "tablet" | "mobile";

export default function PreviewModeSwitcher({
  mode,
  setMode,
}: {
  mode: PreviewMode;
  setMode: (mode: PreviewMode) => void;
}) {
  return (
    <div className="flex gap-2 mb-4">
      <button
        className={`px-3 py-1 rounded ${mode === "desktop" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        onClick={() => setMode("desktop")}
        type="button"
      >
        Desktop
      </button>
      <button
        className={`px-3 py-1 rounded ${mode === "tablet" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        onClick={() => setMode("tablet")}
        type="button"
      >
        Tablet
      </button>
      <button
        className={`px-3 py-1 rounded ${mode === "mobile" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        onClick={() => setMode("mobile")}
        type="button"
      >
        Mobile
      </button>
    </div>
  );
}
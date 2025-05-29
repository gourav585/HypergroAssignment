import React from "react";

type Mode = "desktop" | "tablet" | "mobile";

export default function DevicePreviewToggle({
  mode,
  setMode,
}: {
  mode: Mode;
  setMode: (m: Mode) => void;
}) {
  return (
    <div className="mb-2 flex gap-2">
      <button
        className={`px-2 py-1 rounded ${mode === "desktop" ? "bg-blue-200" : ""}`}
        onClick={() => setMode("desktop")}
      >
        Desktop
      </button>
      <button
        className={`px-2 py-1 rounded ${mode === "tablet" ? "bg-blue-200" : ""}`}
        onClick={() => setMode("tablet")}
      >
        Tablet
      </button>
      <button
        className={`px-2 py-1 rounded ${mode === "mobile" ? "bg-blue-200" : ""}`}
        onClick={() => setMode("mobile")}
      >
        Mobile
      </button>
    </div>
  );
}
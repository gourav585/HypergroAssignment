import React from "react";

export default function StepTabs({
  steps,
  activeStep,
  setActiveStep,
  addStep,
  removeStep,
}: {
  steps: number[];
  activeStep: number;
  setActiveStep: (step: number) => void;
  addStep: () => void;
  removeStep: (step: number) => void;
}) {
  return (
    <div className="flex items-center space-x-2 mb-2">
      {steps.map(step => (
        <div key={step} className="flex items-center">
          <button
            className={`px-3 py-1 rounded ${
              step === activeStep
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveStep(step)}
            type="button"
          >
            Step {step}
          </button>
          {steps.length > 1 && (
            <button
              className="ml-1 text-red-500 hover:text-red-700"
              onClick={() => removeStep(step)}
              type="button"
              title="Remove step"
            >
              ×
            </button>
          )}
        </div>
      ))}
      <button
        className="px-2 py-1 rounded bg-green-500 text-white"
        onClick={addStep}
        type="button"
        title="Add new step"
      >
        +
      </button>
    </div>
  );
}
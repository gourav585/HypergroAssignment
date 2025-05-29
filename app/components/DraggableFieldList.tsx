import React from "react";
import { useFormBuilderStore } from "~/store/useFormBuilderStore";

export default function DraggableFieldList({
  selectedField,
  setSelectedField,
  filterStep,
}: {
  selectedField: string | null;
  setSelectedField: (id: string | null) => void;
  filterStep: number;
}) {
  const { fields, fieldOrder } = useFormBuilderStore();
  const visibleFieldOrder = fieldOrder.filter(
    (id) => fields[id].step === filterStep
  );

  return (
    <div>
      {visibleFieldOrder.length === 0 && (
        <div className="text-gray-400 text-center py-8">No fields in this step.</div>
      )}
      {visibleFieldOrder.map((id) => (
        <div
          key={id}
          className={`p-2 mb-2 rounded border ${
            selectedField === id ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-white"
          } cursor-pointer`}
          onClick={() => setSelectedField(id)}
        >
          {fields[id].label} <span className="text-xs text-gray-400">({fields[id].type})</span>
        </div>
      ))}
    </div>
  );
}
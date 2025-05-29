import { useFormBuilderStore, FieldType } from "../store/useFormBuilderStore";

const FIELD_TYPES: { type: FieldType; label: string }[] = [
  { type: "text", label: "Text" },
  { type: "textarea", label: "Textarea" },
  { type: "dropdown", label: "Dropdown" },
  { type: "checkbox", label: "Checkbox" },
  { type: "date", label: "Date" },
];

export default function FieldPalette() {
  const addField = useFormBuilderStore((s) => s.addField);

  return (
    <div className="space-y-2">
      <h3 className="font-bold mb-2">Add Field</h3>
      {FIELD_TYPES.map((f) => (
        <button
          key={f.type}
          className="w-full px-3 py-2 bg-blue-100 rounded hover:bg-blue-200"
          onClick={() => addField(f.type)}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
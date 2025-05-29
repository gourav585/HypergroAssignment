import ThemeSwitcher from "./ThemeSwitcher";
import { useFormBuilderStore } from "~/store/useFormBuilderStore";

const FIELD_TYPES = [
  { type: "text", label: "Text" },
  { type: "textarea", label: "Textarea" },
  { type: "dropdown", label: "Dropdown" },
  { type: "checkbox", label: "Checkbox" },
  { type: "date", label: "Date" },
];

function randomId() {
  return Math.random().toString(36).slice(2, 10);
}

export default function BuilderSidebar() {
  const addField = useFormBuilderStore((s) => s.addField);

  return (
    <aside className="w-full sm:w-64 bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 min-h-screen flex-shrink-0">
      <div className="font-bold mb-4">Sidebar</div>
      <ThemeSwitcher />
      <div className="mt-8">
        <div className="font-semibold mb-2">Add Field</div>
        <div className="flex flex-col gap-2">
          {FIELD_TYPES.map(f => (
            <button
              key={f.type}
              className="rounded bg-blue-500 text-white px-3 py-1 hover:bg-blue-600 transition"
              onClick={() =>
                addField({
                  id: randomId(),
                  type: f.type as any,
                  label: f.label,
                  placeholder: "",
                  required: false,
                  helpText: "",
                  options: f.type === "dropdown" ? [{ label: "Option 1", value: "option1" }] : undefined,
                })
              }
            >
              + {f.label}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}

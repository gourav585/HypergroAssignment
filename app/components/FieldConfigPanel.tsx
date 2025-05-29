import { useFormBuilderStore } from "../store/useFormBuilderStore";

interface Props {
  fieldId: string | null;
}

export default function FieldConfigPanel({ fieldId }: Props) {
  const field = useFormBuilderStore(
    (s) => (fieldId ? s.fields[fieldId] : null)
  );
  const updateField = useFormBuilderStore((s) => s.updateField);

  if (!field) return <div className="p-4">Select a field to edit.</div>;

  const isTextLike = field.type === "text" || field.type === "textarea";
  const isOptionLike = field.type === "dropdown" || field.type === "checkbox";
  const isDate = field.type === "date";

  return (
    <div className="p-4 space-y-3">
      <h4 className="font-bold mb-2">Edit Field</h4>
      <div>
        <label className="block text-sm">Label</label>
        <input
          className="border p-1 rounded w-full"
          value={field.label}
          onChange={(e) => updateField(field.id, { label: e.target.value })}
        />
      </div>
      {isTextLike && (
        <div>
          <label className="block text-sm">Placeholder</label>
          <input
            className="border p-1 rounded w-full"
            value={field.placeholder ?? ""}
            onChange={(e) =>
              updateField(field.id, { placeholder: e.target.value })
            }
          />
        </div>
      )}
      <div>
        <label className="block text-sm">Required</label>
        <input
          type="checkbox"
          checked={field.required}
          onChange={(e) => updateField(field.id, { required: e.target.checked })}
        />
      </div>
      <div>
        <label className="block text-sm">Help Text</label>
        <input
          className="border p-1 rounded w-full"
          value={field.helpText ?? ""}
          onChange={(e) =>
            updateField(field.id, { helpText: e.target.value })
          }
        />
      </div>
      {isOptionLike && (
        <div>
          <label className="block text-sm mb-1">Options (comma separated)</label>
          <input
            className="border p-1 rounded w-full"
            value={field.options?.join(", ") ?? ""}
            onChange={(e) =>
              updateField(field.id, {
                options: e.target.value.split(",").map((o) => o.trim()),
              })
            }
          />
        </div>
      )}
      {isTextLike && (
        <>
          <div>
            <label className="block text-sm">Min Length</label>
            <input
              type="number"
              className="border p-1 rounded w-full"
              value={field.minLength ?? ""}
              onChange={(e) =>
                updateField(field.id, {
                  minLength: e.target.value ? Number(e.target.value) : undefined,
                })
              }
            />
          </div>
          <div>
            <label className="block text-sm">Max Length</label>
            <input
              type="number"
              className="border p-1 rounded w-full"
              value={field.maxLength ?? ""}
              onChange={(e) =>
                updateField(field.id, {
                  maxLength: e.target.value ? Number(e.target.value) : undefined,
                })
              }
            />
          </div>
          <div>
            <label className="block text-sm">Pattern (RegEx)</label>
            <input
              className="border p-1 rounded w-full"
              value={field.pattern ?? ""}
              onChange={(e) =>
                updateField(field.id, { pattern: e.target.value })
              }
            />
          </div>
        </>
      )}
      {isDate && (
        <div className="text-gray-500 text-sm">
          <em>No extra configuration for date fields yet.</em>
        </div>
      )}
    </div>
  );
}
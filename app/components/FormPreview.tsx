import { useFormBuilderStore } from "~/store/useFormBuilderStore";

export default function FormPreview() {
  const fields = useFormBuilderStore(s => s.fields);
  const removeField = useFormBuilderStore(s => s.removeField);

  return (
    <form className="space-y-6">
      {fields.length === 0 && <div className="text-gray-400">No fields yet.</div>}
      {fields.map((field, idx) => (
        <div key={field.id} className="relative border p-3 rounded bg-white dark:bg-gray-800 shadow-sm">
          <button
            type="button"
            className="absolute top-2 right-2 text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            onClick={() => removeField(field.id)}
            aria-label={`Remove ${field.label}`}
          >
            Remove
          </button>
          <label className="block font-semibold mb-1">
            {field.label}
            {field.required && <span className="text-red-500">*</span>}
          </label>
          {field.type === "text" && (
            <input
              type="text"
              placeholder={field.placeholder}
              required={field.required}
              className="w-full border px-3 py-2 rounded"
            />
          )}
          {field.type === "textarea" && (
            <textarea
              placeholder={field.placeholder}
              required={field.required}
              className="w-full border px-3 py-2 rounded"
            />
          )}
          {field.type === "dropdown" && (
            <select
              required={field.required}
              className="w-full border px-3 py-2 rounded"
            >
              {(field.options || []).map(opt =>
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              )}
            </select>
          )}
          {field.type === "checkbox" && (
            <input type="checkbox" required={field.required} />
          )}
          {field.type === "date" && (
            <input type="date" required={field.required} className="w-full border px-3 py-2 rounded" />
          )}
          {field.helpText && (
            <div className="text-xs text-gray-500 mt-1">{field.helpText}</div>
          )}
        </div>
      ))}
      {fields.length > 0 && (
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded w-full sm:w-auto" type="submit">
          Submit
        </button>
      )}
    </form>
  );
}

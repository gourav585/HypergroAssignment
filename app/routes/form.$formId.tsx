import { useParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import FormPreview from "~/components/FormPreview";
import { useFormBuilderStore, FormField } from "~/store/useFormBuilderStore";

// Dummy getFormById. Replace with your API/localStorage logic.
function getFormById(formId: string): { fields: Record<string, FormField>; fieldOrder: string[] } | null {
  const allForms = JSON.parse(localStorage.getItem("allForms") || "{}");
  return allForms[formId] || null;
}

export default function FormFiller() {
  const { formId } = useParams();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!formId) return;
    const data = getFormById(formId);
    if (data) {
      // Replace current store with loaded fields
      // You might want to set this with a custom action in your Zustand store.
      // For now, you can just show a preview or use Zustand's setState.
    }
    setLoaded(true);
  }, [formId]);

  if (!loaded) return <div>Loading...</div>;
  // Render public FormPreview here as read-only/fillable
  // You may want to make a separate FormPreviewPublic for this
  return <FormPreview />;
}
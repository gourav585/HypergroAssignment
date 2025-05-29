import FormPreview from "~/components/FormPreview";
import { useFormBuilderStore } from "~/store/useFormBuilderStore";

export default function Index() {
  const undo = useFormBuilderStore(s => s.undo);
  const redo = useFormBuilderStore(s => s.redo);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Form Builder</h1>
      <div className="flex gap-3 mb-4">
        <button className="bg-gray-200 px-3 py-1 rounded" onClick={undo}>Undo</button>
        <button className="bg-gray-200 px-3 py-1 rounded" onClick={redo}>Redo</button>
      </div>
      <FormPreview />
    </div>
  );
}
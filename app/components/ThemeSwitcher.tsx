import { useFormBuilderStore } from "~/store/useFormBuilderStore";

export default function ThemeSwitcher() {
  const theme = useFormBuilderStore((state) => state.theme);
  const setTheme = useFormBuilderStore((state) => state.setTheme);

  return (
    <div className="mb-4">
      <label className="font-bold mr-4">Theme</label>
      <select
        value={theme}
        onChange={e => setTheme(e.target.value as "light" | "dark")}
        className="p-2 border rounded"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}
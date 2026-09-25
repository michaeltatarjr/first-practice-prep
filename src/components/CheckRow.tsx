type CheckRowProps = {
  id: string;
  label: string;
  checked: boolean;
  onChange: (id: string, checked: boolean) => void;
};

export function CheckRow({ id, label, checked, onChange }: CheckRowProps) {
  return (
    <label className={checked ? "check-row done" : "check-row"}>
      <input type="checkbox" checked={checked} onChange={(event) => onChange(id, event.target.checked)} />
      <span className="check-label">{label}</span>
    </label>
  );
}

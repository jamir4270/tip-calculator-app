type BillProps = {
  value: string;
  onChange: (newValue: string) => void;
};

export default function BillInput({ value, onChange }: BillProps) {
  return (
    <div className="bill-input">
      <label htmlFor="bill" className="bill-label">
        Bill
      </label>
      <input
        type="text"
        value={value}
        className="bill"
        pattern="^(0|[1-9]\d*)(\.\d+)?$"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

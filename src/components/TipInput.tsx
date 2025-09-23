type TipProps = {
  value: string;
  onChange: (newValue: string) => void;
};

export default function TipInput({ value, onChange }: TipProps) {
  return (
    <div className="tip-input">
      <input
        type="text"
        value={value}
        className="tip"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

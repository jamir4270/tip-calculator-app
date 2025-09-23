import "./TipInput.css";

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
        className="tip-1"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

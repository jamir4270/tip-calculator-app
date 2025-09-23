type NumOfPeopleProps = {
  value: string;
  onChange: (newValue: string) => void;
};

export default function NumOfPeopleInput({
  value,
  onChange,
}: NumOfPeopleProps) {
  return (
    <div className="num-of-people-input">
      <label htmlFor="num-of-people">Number of People</label>
      <input
        type="text"
        className="num-of-people"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

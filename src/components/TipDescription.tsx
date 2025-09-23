type TipDescriptionProps = {
  tipPerPerson: string;
  totalPerPerson: string;
};

export default function TipDescription({
  tipPerPerson,
  totalPerPerson,
}: TipDescriptionProps) {
  return (
    <div className="tip-description">
      <div className="tip-per-person">Tip Per Person: {tipPerPerson}</div>
      <div className="total-per-person">Total Per Person: {totalPerPerson}</div>
    </div>
  );
}

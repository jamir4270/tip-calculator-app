import "./TipDescription.css";

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
      <div className="description">
        <div className="tip-per-person">
          <h3>Tip Amount</h3>
          <p>/ person</p>
        </div>
        <div className="amt">${tipPerPerson}</div>
      </div>
      <div className="description">
        <div className="total-per-person">
          <h3>Total</h3>
          <p>/ person</p>
        </div>
        <div className="amt">${totalPerPerson}</div>
      </div>
    </div>
  );
}

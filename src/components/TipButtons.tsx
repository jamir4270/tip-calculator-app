import { useState } from "react";
import TipInput from "./TipInput";
import "./TipButtons.css";

type TipButtonProps = {
  tipValues: string[];
  onSelect: (value: string) => void;
};

export default function TipButtons({ tipValues, onSelect }: TipButtonProps) {
  const [tip, setTip] = useState("");

  function isValidTipValue(value: string) {
    const regex = /^\d*\.?\d*$/;
    return regex.test(value);
  }

  function handleTip(newTip: string) {
    if (isValidTipValue(newTip)) {
      setTip(newTip);
      onSelect(newTip);
    }
  }

  return (
    <div className="tip">
      <label htmlFor="tip">Select Tip %</label>
      <div className="tip-input">
        {tipValues.map((tipVal) => (
          <button key={tipVal} onClick={() => onSelect(tipVal)}>
            {tipVal}%
          </button>
        ))}
        <TipInput value={tip} onChange={handleTip} />
      </div>
    </div>
  );
}

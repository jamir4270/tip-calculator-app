import logo from "/frontend_mentor_resources/images/logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import BillInput from "./components/BillInput";
import TipButtons from "./components/TipButtons";
import NumOfPeopleInput from "./components/NumOfPeopleInput";
import TipCalculator from "./utils/TipCalculator";
import TipDescription from "./components/TipDescription";

function App() {
  const [bill, setBill] = useState("");
  const [text, setText] = useState("");
  const tipValues = ["5", "10", "15", "25", "50"];
  const [selectedTip, setSelectedTip] = useState("");
  const [numOfPeople, setNumOfPeople] = useState("0");
  const [tipDescription, setTipDescription] = useState({
    tipPerPerson: "",
    totalPerPerson: "",
  });

  useEffect(() => {
    const billVal = parseFloat(bill);
    const tipVal = parseFloat(selectedTip);
    const totalNumOfPeople = parseInt(numOfPeople);

    const tips = TipCalculator(billVal, tipVal, totalNumOfPeople);
    handleTipDescription(tips.totalPerPerson, tips.tipPerPerson);
  }, [bill, selectedTip, numOfPeople]);

  function handleTipDescription(
    newTotalPerPerson: number,
    newTipPerPerson: number
  ) {
    const newTip = newTipPerPerson.toString();
    const newTotal = newTotalPerPerson.toString();
    setTipDescription({
      tipPerPerson: newTip,
      totalPerPerson: newTotal,
    });
  }

  function handleNumOfPeople(newValue: string) {
    if (isValidValue(newValue)) {
      setNumOfPeople(newValue);
    }
  }

  function handleSelectedTip(newTip: string) {
    setSelectedTip(newTip);
  }

  function isValidValue(value: string) {
    const regex = /^\d*\.?\d*$/;
    return regex.test(value);
  }

  function handleBill(newValue: string) {
    if (isValidValue(newValue)) {
      setBill(newValue);
      setText(newValue);
    }
  }
  return (
    <div className="main">
      <div className="logo">
        <img src={logo} alt="image of splitter logo" />
      </div>
      <div className="calculator">
        <div className="tip-form">
          <BillInput value={bill} onChange={handleBill} />
          <TipButtons tipValues={tipValues} onSelect={handleSelectedTip} />
          <NumOfPeopleInput value={numOfPeople} onChange={handleNumOfPeople} />
          <p>{text}</p>
          <p>{selectedTip}</p>
          <p>{numOfPeople}</p>
        </div>
        <div className="result">
          <TipDescription
            tipPerPerson={tipDescription.tipPerPerson}
            totalPerPerson={tipDescription.totalPerPerson}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

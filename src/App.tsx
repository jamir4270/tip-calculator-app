import logo from "/frontend_mentor_resources/images/logo.svg";
import "./App.css";
import { useState } from "react";
import BillInput from "./components/BillInput";
import TipButtons from "./components/TipButtons";
import NumOfPeopleInput from "./components/NumOfPeopleInput";

function App() {
  const [bill, setBill] = useState("");
  const [text, setText] = useState("");
  const tipValues = ["5", "10", "15", "25", "50"];
  const [selectedTip, setSelectedTip] = useState("");
  const [numOfPeople, setNumOfPeople] = useState("0");

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
        <div className="result"></div>
      </div>
    </div>
  );
}

export default App;

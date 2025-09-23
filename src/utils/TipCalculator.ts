export default function TipCalculator(
  bill: number,
  tip: number,
  numOfPeople: number
) {
  const totalTip = bill * (tip / 100);
  const tipPerPerson = totalTip / numOfPeople;
  const totalPerPerson = (bill + totalTip) / numOfPeople;

  return { tipPerPerson, totalPerPerson };
}

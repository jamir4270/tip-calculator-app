export default function TipCalculator(
  bill: number,
  tip: number,
  numOfPeople: number
) {
  const totalTip = bill * (tip / 100);
  const tipPerPerson = totalTip / numOfPeople;

  return { totalTip, tipPerPerson };
}

export default function TipCalculator(
  bill: number,
  tip: number,
  numOfPeople: number
) {
  const totalTip = bill * (tip / 100);
  const tipPerPerson = (totalTip / numOfPeople).toFixed(2);
  const totalPerPerson = ((bill + totalTip) / numOfPeople).toFixed(2);

  return { tipPerPerson, totalPerPerson };
}

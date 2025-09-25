export default function TipCalculator(
  bill: number,
  tip: number,
  numOfPeople: number
) {
  const totalTip = bill * (tip / 100);
  const tipPerPerson = parseFloat((totalTip / numOfPeople).toFixed(2));
  const totalPerPerson = parseFloat(
    ((bill + totalTip) / numOfPeople).toFixed(2)
  );

  return { tipPerPerson, totalPerPerson };
}

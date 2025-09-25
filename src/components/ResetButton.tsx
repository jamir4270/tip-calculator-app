import "./ResetButton.css";

type ResetButtonProp = {
  onClick: () => void;
};

export default function ResetButton({ onClick }: ResetButtonProp) {
  return (
    <div className="reset-button">
      <button className="reset" onClick={onClick}>
        Reset
      </button>
    </div>
  );
}

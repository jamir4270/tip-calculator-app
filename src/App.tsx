import logo from "/frontend_mentor_resources/images/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="logo">
        <img src={logo} alt="image of splitter logo" />
      </div>
      <div className="calculator">
        <div className="tip-form"></div>
        <div className="result"></div>
      </div>
    </div>
  );
}

export default App;

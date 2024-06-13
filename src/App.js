// This app lets user input a name and predicts the names nationality
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "react-bootstrap/Alert";
import FindNationality from "./components/FindNationality.js";

import { useState, useEffect, useRef } from "react";
function App() {
  const [userName, setuserName] = useState("");
  const [result, setResult] = useState("");

  //using useRef to auto focus on input field
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div className="App">
      <Alert variant="success">
        <h1>Predict Nationality of a Name</h1>
      </Alert>
      <h4>
        Enter a name below to find which country it belongs to with highest
        probability.
      </h4>
      <input
        ref={ref}
        type="text"
        placeholder="Enter name here"
        value={userName}
        onChange={(event) => {
          if (event.target.value === "") {
            setResult("");
          }
          setuserName(event.target.value);
        }}></input>
      <FindNationality
        userName={userName}
        result={result}
        setResult={setResult}></FindNationality>
      <h3>{result}</h3>
    </div>
  );
}

export default App;

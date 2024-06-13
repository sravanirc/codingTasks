// This app lets user input a name and predicts the names nationality
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "react-bootstrap/Alert";
import FindNationality from "./components/FindNationality.js";

import { useState, useEffect, useRef } from "react";
function App() {
  const [userName, setuserName] = useState("");
  //using useRef to auto focus on input field
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div className="App">
      <Alert variant="success">Predict Nationality Of a Name</Alert>
      <p>
        Enter a name below to find which country it belongs to with highest
        probability.
      </p>
      <input
        ref={ref}
        type="text"
        placeholder="Enter name here"
        value={userName}
        onChange={(event) => {
          setuserName(event.target.value);
        }}></input>
      <FindNationality userName={userName}></FindNationality>
    </div>
  );
}

export default App;

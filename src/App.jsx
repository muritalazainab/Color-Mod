import { useState } from "react";
import "./App.css";
import Square from "./assets/Square";
import Input from "./Input";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, sethexValue] = useState("");
  const [isDarkText, setisDarkText] = useState(true);
  return (
    <>
      <div className="App">
        <Square
          colorValue={colorValue}
          hexValue={hexValue}
          isDarkText={isDarkText}
        />
        <Input
          colorValue={colorValue}
          setColorValue={setColorValue}
          sethexValue={sethexValue}
          isDarkText={isDarkText}
          setisDarkText={setisDarkText}
        />
      </div>
    </>
  );
}

export default App;

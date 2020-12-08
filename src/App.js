import "./App.css";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from "react";

const alanKey =
  "f7a2bfa6b7bc2e45c0a4676850307b8d2e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === "testCommand") {
          alert("This code was executed");
        }
      },
    });
  }, []);

  return (
    <div className="App">
      <h1>Alan News Application</h1>
    </div>
  );
}

export default App;

import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("yo");
  }, []);
  return <div className="App">Hello</div>;
}

export default App;

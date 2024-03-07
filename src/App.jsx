import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CharacterGallery from "./components/CharacterGallery";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>LOTR Project</h1>
      <CharacterGallery />
    </>
  );
}

export default App;

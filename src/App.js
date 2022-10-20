import { useState } from "react";
import Home from "./components/Home";
import Quizz from "./components/Quizz";

function App() {
  const [home, setHome] = useState(true);

  const handleHome = () => {
    setHome((prev) => !prev);
  };

  return (
    <>
      {home && <Home handleClick={handleHome} />}
      {!home && <Quizz />}
    </>
  );
}

export default App;

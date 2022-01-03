import { useState } from "react";
import Header from "./components/Header";

function App() {
  // State para presupuesto
  const [presupuesto, setPresupuesto] = useState(0);

  // State para presupuesto valido
  const [isValid, setIsValid] = useState(false);

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setIsValid={setIsValid}
        isValid={isValid}
      />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import VerNavBar from "./components/VerNavBar";
import DashboardLayout from "./pages/DashboardLayout";
import WorkOut from "./pages/WorkOut";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <HorizNavBar /> */}
      {/* <VerNavBar /> */}
      <DashboardLayout />
    </>
  );
}

export default App;

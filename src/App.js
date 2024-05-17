import { Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";

function App() {
  return (
    <Routes>
      <Route path="" element={<Registration />}></Route>
    </Routes>
  );
}

export default App;

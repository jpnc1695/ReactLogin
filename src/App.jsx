import SignInSide from "./Components/Signin/SignInSide";
import Cadastro from "./Components/Cadastro/Cadastro";
import Dashboard from "./Components/DashBoard/DashBoard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignInSide />} />
      <Route path="/novoUser" element={<Cadastro/>} />
      <Route path="/dashBoard" element={<Dashboard/>} />
    </Routes>
  );
}

export default App;

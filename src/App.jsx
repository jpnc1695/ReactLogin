import SignInSide from "./Components/Signin/SignInSide";
import Cadastro from "./Components/Cadastro/Cadastro";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignInSide />} />
      <Route path="/novoUser" element={<Cadastro/>} />
    </Routes>
  );
}

export default App;

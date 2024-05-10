import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Register from "./components/FormComponents/Register";
import Login from "./components/FormComponents/Login";
import Products from "./pages/Products";
import TestProduct from "./pages/TestProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/product" element={<Products />} />
        <Route path="/test" element={<TestProduct />} />
      </Routes>
    </>
  );
}

export default App;

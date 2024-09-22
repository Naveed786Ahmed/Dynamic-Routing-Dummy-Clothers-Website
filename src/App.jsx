import { Route, Routes } from "react-router-dom";
import "./App.css"
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import ErrorApp from "./components/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<ErrorApp/>} />
        <Route path="/" element={<Home />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
      </Routes>
    </>
  )
}

export default App;
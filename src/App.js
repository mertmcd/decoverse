import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={< Main />} />
        <Route path="/products" element={< Products />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

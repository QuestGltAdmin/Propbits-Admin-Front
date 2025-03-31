import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./component/ScrollToTop";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Toaster />
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/" element={<Login />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;

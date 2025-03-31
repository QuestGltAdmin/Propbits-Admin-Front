import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./component/ScrollToTop";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Verify from "./pages/Verify_account";
import Dashboard from "./pages/Dashboard/Dashboard";
import Properties from "./pages/Dashboard/Properties";
import Profile from "./pages/Dashboard/Profile";
import { ManagePropertyListing } from "./pages/Dashboard/ManagePropertyListing";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Toaster />
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/verify-otp" element={<Verify />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/manage-property-listing" element={<ManagePropertyListing />} />
          
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;

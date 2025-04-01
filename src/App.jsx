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
import AdminPrivateRoute from "./PrivateRoute/AdminPrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Toaster />
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/verify-otp" element={<Verify />} />
          <Route
            path="/dashboard"
            element={
              <AdminPrivateRoute>
                <Dashboard />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="/properties"
            element={
              <AdminPrivateRoute>
                <Properties />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="/Profile"
            element={
              <AdminPrivateRoute>
                <Profile />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="/manage-property-listing"
            element={
              <AdminPrivateRoute>
                <ManagePropertyListing />
              </AdminPrivateRoute>
            }
          />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;

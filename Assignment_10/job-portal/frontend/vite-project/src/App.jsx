import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import store from "../src/Store";
import { loginSuccess } from "./actions/userActions";

// Pages and Components
import Home from "./pages/HomePage";
import Login from "./components/Login";
import AboutPage from "./pages/AboutPage";
import JobListings from "./pages/JobListing";
import FetchImages from "./components/DisplayImages";
import AddJobPage from "./components/AddJobPage";
import UserPage from "./components/UserPage";
import AdminPage from "./pages/AdminPage";
import ProtectedRoute from "./components/ProtectedRoute";
import ContactPage from "./pages/ContactPage";
import Company from "./pages/Company";
import Signup from "./components/Signup";
import DashboardRedirect from "./pages/DashboardRedirect";

// 🔁 Wrapper to initialize user from localStorage
const InitUser = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const type = localStorage.getItem("type");

    if (token && email && type) {
      dispatch(loginSuccess({ token, email, type }));
    }
  }, [dispatch]);

  return children;
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <InitUser>
          <div className="app" style={{ minHeight: "100vh", margin: 0, padding: 0 }}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route
                path="/jobs"
                element={
                  <ProtectedRoute role="employee">
                    <JobListings />
                  </ProtectedRoute>
                }
              />
              <Route path="/company" element={<FetchImages />} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute role="admin">
                    <AdminPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/addjob"
                element={
                  <ProtectedRoute role="admin">
                    <AddJobPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/users"
                element={
                  <ProtectedRoute role="admin">
                    <UserPage />
                  </ProtectedRoute>
                }
              />
              <Route path="/companies" element={<Company />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard-redirect" element={<DashboardRedirect />} />
            </Routes>
          </div>
        </InitUser>
      </Router>
    </Provider>
  );
};

export default App;
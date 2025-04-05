import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/Store";
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


const App = () => {
  return (
    <Provider store={store}>
      {" "}
      <Router>
        <div className="app" style={{ minHeight: "100vh", margin: 0, padding: 0 }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/jobs"  element={<ProtectedRoute role="employee"> <JobListings/> </ProtectedRoute>}/>
            <Route path="/company" element={<FetchImages />} />
            <Route path="/admin" element={<ProtectedRoute role="admin"> <AdminPage /> </ProtectedRoute>}/>
            <Route path="/addjob" element={<ProtectedRoute role="admin"> <AddJobPage /> </ProtectedRoute>}/>
            <Route path="/users" element={<ProtectedRoute role="admin"> <UserPage /> </ProtectedRoute>}/>
            <Route path="/companies" element={<Company />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
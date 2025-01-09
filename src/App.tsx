import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DocumentUpload from "@/components/documents/DocumentUpload";
import DocumentValidation from "@/components/documents/DocumentValidation";
import Dashboard from "@/components/dashboard/Dashboard";
import Landing from "@/components/landing/Landing";
import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";
import PrivateRoute from "@/components/auth/PrivateRoute";
import Layout from "@/components/layout/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Layout />}>
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/documents/upload" element={<DocumentUpload />} />
            <Route path="/documents/validation" element={<DocumentValidation />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
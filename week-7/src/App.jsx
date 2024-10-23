import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const Dashboard = React.lazy(() => import("./pages/Dashboard.jsx"))
const Landing = React.lazy(() => import("./pages/Landing.jsx"))

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();

  return (
    <div>
    <button
      onClick={() => {
        navigate("/");
      }}
      >
      Landing
    </button>
    <button
      onClick={() => {
        navigate("/dashboard");
      }}
      >
      Dashboard
    </button>
  </div>
    )
}

export default App;

import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Index from "./components/Index";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="*"
          element={<Index />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

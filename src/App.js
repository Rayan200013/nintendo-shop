import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Shop } from "./pages/Shop";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;

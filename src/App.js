import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import ShowName from "./components/ShowName";
import Summary from "./components/Summary";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowName />} />
        <Route path="/show/:id" element={<Summary />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import "./App.css"
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Notfound from "./pages/Notfound";
const App=()=>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="*" element={<Notfound/>} />
      </Routes>
    </Router>
  )
}

export default App;
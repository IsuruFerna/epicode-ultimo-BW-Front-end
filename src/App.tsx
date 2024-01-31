import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoginPage } from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<LoginPage />} path="/login" />
            <Route element={<RegisterPage />} path="/register" />
         </Routes>
      </BrowserRouter>
   );
}

export default App;

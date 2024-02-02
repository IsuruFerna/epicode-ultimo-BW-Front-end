import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoginPage } from "./pages/LoginPage";
import RegisterClientPage from "./pages/RegisterClientPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import AddressComp from "./components/AddressSedeOperativaComp";
import FatturePage from "./pages/FatturePage";
import ClientPage from "./pages/ClientPage";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<LoginPage />} path="/login" />
            <Route element={<RegisterPage />} path="/register" />
            <Route element={<RegisterClientPage />} path="/registerClient" />
            <Route element={<FatturePage />} path="/fatture" />
            <Route element={<ClientPage />} path="/clienti" />
         </Routes>
      </BrowserRouter>
   );
}

export default App;

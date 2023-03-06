import React from "react";

import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { StorePage } from "./pages/StorePage";
import { AboutPage } from "./pages/AboutPage";
import { NavBar } from "./components/NavBar";
import { Container } from "react-bootstrap";
import { ContextProvider } from "./components/shoopingContext/Context";
 const App = () => {
  return (
  <ContextProvider>
  <NavBar/>
    <Container >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
    </Container>
  </ContextProvider>
  );
};
export default App
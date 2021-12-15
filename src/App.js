import React from "react";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer";
import Routes from "./routes";

const App = () => {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
};

export default App;

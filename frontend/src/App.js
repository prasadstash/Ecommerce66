import "./App.css";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/layout/Home/Home.js";
import { Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    // store.dispatch(loadUser());

    // getStripeApiKey();
  }, []);

  return (
    <div>
      <Header />
      <Home/>
      <Footer />
        <Routes>
          <Route exact path="/" component={Home} />
        </Routes>
    </div>
  );
}

export default App;

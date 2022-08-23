import React from "react";
import ReactDOM from "react-dom"
import "./index.css"
import Practice from "./Practice";
import Pra from "./Pra";
import Base from "./Base";
import FAQ from "./FAQ";
import About from "./About";
import Services from "./Services";
import Contacts from "./Contact";
import NavB from "./Navigations";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
ReactDOM.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  ,document.getElementById("root"));

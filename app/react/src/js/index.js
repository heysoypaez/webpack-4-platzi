
//Gracias a Webpack es que es posible hacer esto
import React from "react";
import {render} from "react-dom";
import App from "./components/App.js";
import "../css/index.css";

render(<App />, document.getElementById("root"))